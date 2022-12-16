local HttpService = game:GetService('HttpService')

local success, err = pcall(function()
    HttpService:PostAsync(currentUrl.."/debug/messageOut",HttpService:JSONEncode({
        ['data'] = '-- START OF LOG --',
        ['type'] = 'MessageOutput',
        ['id'] = currentId
    }))
end)

local DataStoreService = game:GetService("DataStoreService")
local DebugStatus = DataStoreService:GetDataStore("DebugStatus")
local tab = {[((tick())-2)] = currentId,[tick()] = {'-- START OF LOG --','Enum.MessageType.MessageOutput'}}

game:BindToClose(function()
    tab[tick()] = {'-- END OF LOG --','Enum.MessageType.MessageOutput'}
end)

game:GetService("LogService").MessageOut:Connect(function(Message, Type)
    tab[tick()] = {Message,tostring(Type)}
    DebugStatus:SetAsync("0", HttpService:JSONEncode(tab))
end)

while true do
    DebugStatus:SetAsync("0", HttpService:JSONEncode(tab))
    wait(7)
end