local HttpService = game:GetService('HttpService')

local ClassProperties = {}

local Data = HttpService:JSONDecode(HttpService:GetAsync("https://anaminus.github.io/rbx/json/api/latest.json"))

for i = 1, #Data do
    local Table = Data[i]
    local Type = Table.type

    if Type == "Class" then
        local ClassData = {}

        local Superclass = ClassProperties[Table.Superclass]

        if Superclass then
            for j = 1, #Superclass do
                ClassData[j] = Superclass[j]
            end
        end

        ClassProperties[Table.Name] = ClassData
    elseif Type == "Property" then
        if not next(Table.tags) then
            local Class = ClassProperties[Table.Class]
            local Property = Table.Name
            local Inserted

            for j = 1, #Class do
                if Class[j] > Property then -- Determine whether `Property` precedes `Class[j]` alphabetically
                    Inserted = true
                    table.insert(Class, j, Property)
                    break
                end
            end

            if not Inserted then
                table.insert(Class, Property)
            end
        end
    elseif Type == "Function" then
    elseif Type == "YieldFunction" then
    elseif Type == "Event" then
    elseif Type == "Callback" then
    elseif Type == "Enum" then
    elseif Type == "EnumItem" then
    end
end

local DataStoreService = game:GetService("DataStoreService")
local DebugStatus = DataStoreService:GetDataStore("DebugStatus")
local LiveView = DataStoreService:GetDataStore("LiveView")
local FirstCurrentTime = DateTime.now().UnixTimestampMillis
local tab = {['1'] = '2', [((FirstCurrentTime)-2)] = currentId,[FirstCurrentTime] = {'-- START OF LOG --','Enum.MessageType.MessageOutput'}}

game:GetService("LogService").MessageOut:Connect(function(Message, Type)
    local CurrentTime = DateTime.now().UnixTimestampMillis
    if (tab[CurrentTime] ~= nil) then
        local isGood = true
        local plusCurrent = 0
        while isGood do
            plusCurrent = (plusCurrent+1)
            if (tab[(CurrentTime+plusCurrent)] == nil) then
                isGood = false
            end
        end
        tab[(CurrentTime+plusCurrent)] = {Message,tostring(Type)}
    else
        tab[CurrentTime] = {Message,tostring(Type)}
    end
end)

while true do
    local allProperties = {}
    for _, object in pairs(game.Workspace:GetDescendants()) do
        if (ClassProperties[object.ClassName] ~= nil) then
            local properties = {["ClassName"] = object.ClassName}
            for i2, v2 in pairs(ClassProperties[object.ClassName]) do
                local propertyValue = 'not_defined'
                local success, error = pcall(function()
                    propertyValue = tostring(object[v2])
                end)
                properties[v2] = propertyValue
            end
            table.insert(allProperties,properties)
        end
    end
    LiveView:SetAsync("0", HttpService:JSONEncode(allProperties))
    tab['1'] = tostring((tonumber(tab['1'])+1))
    DebugStatus:SetAsync("0", HttpService:JSONEncode(tab))
    wait(5.8)
end