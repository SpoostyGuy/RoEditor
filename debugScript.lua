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

if success == false then
    DebugStatus:SetAsync("0", currentId)
end

game:GetService("LogService").MessageOut:Connect(function(Message, Type)
    HttpService:PostAsync(currentUrl.."/debug/messageOut",HttpService:JSONEncode({
        ['data'] = Message,
        ['type'] = tostring(Type),
        ['id'] = currentId
    }))
end)

game:BindToClose(function()
    HttpService:PostAsync(currentUrl.."/debug/messageOut",HttpService:JSONEncode({
        ['data'] = '--  END OF LOG  --',
        ['type'] = 'MessageOutput',
        ['id'] = currentId
    }))
end)

while true do
    wait(3)
    spawn(function()
        local data = HttpService:JSONDecode(HttpService:PostAsync(currentUrl.."/debug/get",HttpService:JSONEncode({
            ['id'] = currentId
        })))
        if data['ye'] ~= nil then
            print('> '.. data['ye'])
            local fun, msg = loadstring(data['ye'])

            if (fun == nil) then
                HttpService:PostAsync(currentUrl.."/debug/messageOut",HttpService:JSONEncode({
                    ['data'] = msg,
                    ['type'] = 'MessageError',
                    ['id'] = currentId
                }))
            else
                local success2,err2 = pcall(function()
                    fun()
                end)
                if (success2 ~= true) then
                    HttpService:PostAsync(currentUrl.."/debug/messageOut",HttpService:JSONEncode({
                        ['data'] = err2,
                        ['type'] = 'MessageError',
                        ['id'] = currentId
                    }))
                end
            end
        end
    end)
end