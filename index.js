
const express = require("express")
var http = require('http')
var socketIO = require('socket.io')
const app = express()
var server = http.createServer(app)
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var io = new socketIO.Server(server)
const request = require('request')
const cors = require("cors")
var querystring = require('querystring');
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.set('trust proxy', true)

// doesn't error when there is a parsing error
app.use((err, req, res, next) => {

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.sendStatus(400); // Bad request
    }
    next();
});

function RobloxRequest(url,method, cookie, callback, usetoken, token, bodything) {
    if (usetoken === true) {
        request({
            headers: {
                Referer: `https://www.roblox.com`,
                Origin: 'https://www.roblox.com',
                Accept: 'application/json',
                'X-CSRF-TOKEN': token,
                'User-Agent': 'Roblox/WinInet',
                'Content-Type': 'application/json; charset=utf-8',
                Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com;`,
            },
            url: url,
            body: bodything,
            method: 'POST'
        }, callback)
    } else {
        request({
            headers: {
                Referer: `https://www.roblox.com`,
                Accept: 'application/json',
                'User-Agent': 'Roblox/WinInet',
                Origin: 'https://www.roblox.com',
                'Content-Type': 'application/json; charset=utf-8',
                Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com;`,
            },
            url: url,
            method: method
        }, callback)
    }
}

var hellos = {
    Afrikaans: 'Hallo',
    Hungarian: 'Szia',
    Hausa: 'Sannu',
    Indonesian: 'Halo',
    Hawaiian: 'Aloha',
    Italian: 'Ciao',
    Javanese: 'Halo',
    Kinyarwanda: 'Mwaramutse',
    Kurdish: 'Slav',
    Latin: 'Salve',
    Lithuanian: 'Sveiki',
    Latvian: 'Sveiki',
    Malagasy: 'Salama',
    Malay: 'Hello',
    Luxembourgish: 'Hallo',
    Norwegian: 'Hallo',
    'Nyanja (Chichewa)': 'Moni',
    Maltese: 'Bongu',
    Polish: 'Witam',
    Shona: 'Mhoro',
    Slovak: 'Ahoj',
    Somali: 'Hello',
    Azerbaijani: 'Salam',
    Bosnian: 'zdravo',
    Basque: 'Kaixo',
    Catalan: 'Hola',
    Czech: 'Ahoj',
    Cebuano: 'Hello',
    Dutch: 'Hallo',
    Corsican: 'Bonghjornu',
    Croatian: 'zdravo',
    English: 'Hello',
    Galician: 'Ola',
    Danish: 'Hej',
    'Haitian Creole': 'Bonjou',
    Estonian: 'Tere',
    French: 'Bonjour',
    Finnish: 'Hei',
    German: 'Hallo',
    Sundanese: 'Halo',
    Slovenian: 'zdravo',
    Sesotho: 'Lumela',
    Samoan: 'talofa',
    Spanish: 'Hola',
    Swahili: 'Habari',
    Turkmen: 'Salam',
    'Tagalog (Filipino)': 'Kamusta',
    Turkish: 'Merhaba',
    Uzbek: 'Salom',
    Welsh: 'Helo',
    Esperanto: 'Saluton',
    Frisian: 'Hallo',
    Xhosa: 'Mholo',
    Zulu: 'Sawubona'
}

app.get('/', function (req, res) {
    var keys = Object.keys(hellos)
    var data = keys[ keys.length * Math.random() << 0]
    var fileYE = fs.readFileSync(__dirname + '/index.html').toString('utf-8')
    var dataYEyes = '<script>var helloPage = "' + data + '|' + hellos[data] + '" </script>\n'
    var splitUp = fileYE.split('<link rel="shortcut icon"')[0] + dataYEyes + '<link rel="shortcut icon"' + fileYE.split('<link rel="shortcut icon"')[1]
    var cookie = req.cookies['ROBLOSECURITY']
    RobloxRequest('https://users.roblox.com/v1/users/authenticated', 'GET', cookie, function(err,res2,body) {
        if (res2.statusCode != 200) {
            res.cookie('ROBLOSECURITY',undefined,{
                maxAge: new Date(0)
            })
            cookie = undefined
        }
        if (cookie == undefined) {
            res.redirect('/login')
        } else {
            res.send(splitUp)
        }
    })
})

var googleapis = require('googleapis')
var google = googleapis.google
const oauth2Client = new google.auth.OAuth2();

oauth2Client.setCredentials()

/*
function getGoogleAuthURL() {
    const scopes = [
        'https://www.googleapis.com/auth/drive.photos.readonly',
        'https://www.googleapis.com/auth/drive.scripts',
        'https://www.googleapis.com/auth/drive.apps.readonly',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.metadata',
        'https://www.googleapis.com/auth/docs',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.readonly'
    ];

    return oauth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes, // If you only need one scope you can pass it as string
    });
  }
  

  async function getGoogleUser({ code }) {
    const { tokens } = await oauth2Client.getToken(code);
    console.log(tokens)
  }
  
  
  async function googleAuth(input, context) {
    const googleUser = await getGoogleUser({ code: input.code });
  }

  app.get('/auth/google',function(req,res) {
    googleAuth(req.query)
    res.send('yo')
  })



app.get('/ye',function(req,res) {
    res.redirect(getGoogleAuthURL())
})
*/

const drive = google.drive('v3');

async function SearchFileById(id,hash) {
    try {
        if (hash == undefined) {
            const res = await drive.files.list({
                auth: oauth2Client,
                q: "name contains '" + id + "'",
                fields: 'nextPageToken, files(id, name)',
                spaces: 'drive',
            });
            return res.data.files;
        } else {
            const res = await drive.files.list({
                auth: oauth2Client,
                q: "name contains '" + hash + "'",
                fields: 'nextPageToken, files(id, name)',
                spaces: 'drive',
            });
            return res.data.files;
        }
    } catch (err) {
        console.log('DRIVE ERROR:')
        console.log(err)
        return false
    }
}

async function DownloadFileById(id) {
    try {
        const res = await drive.files.get({
            auth: oauth2Client,
            fileId: id,
            alt: 'media'
        });
        return res.data;
    } catch (err) {
        console.log('DRIVE ERROR:')
        console.log(err)
        return ''
    }
}

async function UploadFile(body,id,hash) {
    const fileMetadata = {
        'name': id + '|' + hash,
    };
    console.log(fileMetadata)
    var stream = require('stream');
    var readable = new stream.Readable();
    readable.push(JSON.stringify(body));
    readable._read = () => {};
    readable.push(null);
    const media = {
        mimeType: 'application/json',
        body: readable,
    };
    try {
        await drive.files.create({
            auth: oauth2Client,
            resource: fileMetadata,
            media: media,
            fields: 'id',
        });
        return true
    } catch (err) {
        console.log('DRIVE ERROR:')
        console.log(err)
        return false
    }    
}

app.get('/login', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie != undefined) {
        res.redirect('/')
    } else {
        res.sendFile(__dirname + '/login.html')
    }
})

app.get('/favicon.ico', function (req, res) {
    res.sendFile(__dirname + '/favicon.ico')
})

app.get('/redirect', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie == undefined) {
        res.redirect('/login')
    } else {
        res.sendFile(__dirname + '/redirect.html')
    }
})

app.get('/lib.js', function (req, res) {
    res.sendFile(__dirname + '/lib.js')
})

app.get('/titlebackground.png', function (req, res) {
    res.sendFile(__dirname + '/titlebackground.png')
})

app.get('/getfile', function (req, res) {
    res.sendFile(__dirname + '/RoEditorFormat.rbxlx')
})

app.get('/getfile2', function (req, res) {
    res.sendFile(__dirname + '/yed.rbxlx')
})

app.get('/getest.js', function (req, res) {
    res.sendFile(__dirname + '/editorxml.js')
})

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/test.html')
})

app.get('/iconSheet',function(req,res) {
    res.sendFile(__dirname + '/sheet.png')
})

function RobloxRequest2(url,method, cookie, callback, usetoken, token, bodything) {
    if (usetoken === true) {
        request({
            headers: {
                'User-Agent': 'Roblox/WinInet',
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/xml; charset=utf-8',
                Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com; rbx-ip2=; RBXEventTrackerV2=CreateDate=8/3/2022 9:41:35 AM&rbxid=&browserid=142191137782; GuestData=UserID=-725336160; _gcl_au=1.1.1743709023.1659537699; RBXSource=rbx_acquisition_time=8/3/2022 9:41:45 AM&rbx_acquisition_referrer=https://www.roblox.com/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fgames%2F9203864304%2Fraise-a-floppa%23%21%2Fgame-instances&rbx_medium=Direct&rbx_source=www.roblox.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=0`,
            },
            url: url,
            body: bodything,
            method: 'POST'
        }, callback)
    } else {
        request({
            headers: {
                'accept': 'application/json, text/plain, */*',
                'user-agent': 'Roblox/WinInet',
                'Content-Type': 'application/json; charset=utf-8',
                Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com; rbx-ip2=; RBXEventTrackerV2=CreateDate=8/3/2022 9:41:35 AM&rbxid=&browserid=142191137782; GuestData=UserID=-725336160; _gcl_au=1.1.1743709023.1659537699; RBXSource=rbx_acquisition_time=8/3/2022 9:41:45 AM&rbx_acquisition_referrer=https://www.roblox.com/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fgames%2F9203864304%2Fraise-a-floppa%23%21%2Fgame-instances&rbx_medium=Direct&rbx_source=www.roblox.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=0`,
            },
            url: url,
            body: bodything,
            method: method
        }, callback)
    }
}

var currentUrl = 'https://testing-my-app-fri3jdoxjwonxwn.herokuapp.com'
var idsYE = {}
var idsNoWork = {}
var messageQueueYE = {}

/*
app.get('/search',function(req,res4) {
    if (typeof(req.query.q) != 'string') {
        return res4.status(200).send({'nope': 'nothing'})   
    }
    request.get('https://www.amazon.com/s?k=' + req.query.q, { "encoding": "utf8","gzip": true}, function(err,res,body8) {
        body8 = body8.replace(/[\r\n]/gm, '');
        var startNum = 1
        var id = undefined
        var list = {}
        var max = 20
        try {
            while (true) {
                var id4 = body8.split(' <div data-asin="')[startNum]
                if (startNum >= (max*2)) {
                    id = 'abc'
                    console.log('max')
                    break
                }
                if (id4 != undefined) {
                    if (id4.split('"')[0] != '') {
                        id = id4.split('"')[0]
                        break
                    } else {
                        startNum = startNum +2
                    }
                } else {
                    startNum = startNum +2
                }
            }
    
            if(id == '' || id == 'abc') {
                return res4.status(200).send({'nope': 'nothing'})
            }
    
            var lastStart = startNum
    
            for (let i = 0; i < 5; i++) {
                var startNum2 = (lastStart+2)
                var id2 = undefined
                while (true) {
                    var id4 = body8.split(' <div data-asin="')[startNum2]
                    if (startNum2 >= ((max+startNum2)*2)) {
                        id2 = 'abc'
                        console.log('max')
                        break
                    }
                    if (id4 != undefined) {
                        if (id4.split('"')[0] != '') {
                            id2 = id4.split('"')[0]
                            break
                        } else {
                            startNum2 = startNum2 +2
                        }
                    } else {
                        startNum2 = startNum2 +2
                    }
                }
                lastStart = startNum2
                var price = body8.split(' <div data-asin="')[startNum2].split('<span class="a-offscreen">$')[1].split('<')[0]
                var image = body8.split(' <div data-asin="')[startNum2].split('<img class="s-image" src="')[1].split('"')[0]
                var name = body8.split(' <div data-asin="')[startNum2].split('<img class="s-image" src="')[1].split('alt="')[1].split('"')[0]
                list[id2] = [name,image,price]
            }
    
            var image = body8.split(' <div data-asin="')[startNum].split('<img class="s-image" src="')[1].split('"')[0]
            var price = body8.split(' <div data-asin="')[startNum].split('<span class="a-offscreen">$')[1].split('<')[0]
            var name = body8.split(' <div data-asin="')[startNum].split('<img class="s-image" src="')[1].split('alt="')[1].split('"')[0]
            res4.status(200).send({main: [name,price,image,id], others: list})
        } catch {
            res4.status(200).send({main: [], others: []})
        }
        request.get('https://www.amazon.com/a/dp/' + id, { "encoding": "utf8","gzip": true}, function(err,res,body8) {
            body8 = body8.replace(/[\r\n]/gm, '');
            var name = body8.split('<span id="productTitle" class="a-size-large product-title-word-break">        ')[1].split('       </span>')[0]
            var price = body8.split('<span class="a-offscreen">$')[1].split('<')[0]
            res4.status(200).send({main: [name,price,image,id], others: list})
        })
    })
})
*/

app.post('/debug', express.text({type: '*/*', limit: '62mb'}), async function(req,res) {
    if (req.body == undefined) {
        console.log('6')
        return res.status(400).send({'nope': 'no means no'})
    }
    if (req.cookies['ROBLOSECURITY'] == undefined) {
        console.log('5')
        return res.status(400).send({'nope': 'no means no'})
    }
    if (req.headers["content-type"] == 'application/xml' && req.body != undefined) {
        if (typeof(req.body) != 'string') {
            console.log('4')
            return res.status(400).send({'nope': 'no means no'})
        }
        if (req.body.split('#!')[1] == undefined) {
            console.log('3')
            return res.status(400).send({'nope': 'no means no'})
        }
        if (req.body.split('#!')[0] == '') {
            console.log('2')
            return res.status(400).send({'nope': 'no means no'})
        }
        var valid = validXml(req.body.split('#!')[1])
        if (valid == false) {
            console.log('1')
            return res.status(400).send({'nope': 'no means no'})
        }
        var fs = require('fs')
        var id = undefined
        while (true) {
            var temp = randomId(12,'aA0')
            if (idsYE[temp] == undefined) {
                id = temp
                break
            }
        }
        idsYE[temp] = req.body.split('#!')[0]
        var luaScript = '\nlocal currentUrl = "' + currentUrl + '"\nlocal currentId = "' + id + '"\n' +  fs.readFileSync(__dirname + '/debugScript.lua').toString('utf8')

        var baseScriptString = `
        <Item class="Script" referent="RBX2">
        <Properties>
            <bool name="Disabled">false</bool>
            <Content name="LinkedSource"><null></null></Content>
            <string name="Name">Debugger</string>
            <ProtectedString name="Source">
            ${luaScript.replaceAll('    ','&#9;')}
            
            </ProtectedString>
        </Properties>
        </Item>`

        var cookie = req.cookies['ROBLOSECURITY']
        var gotReq = false
        console.log('Shutting down all servers...')
        RobloxRequest2('https://roblox.com', 'GET', cookie, async function(err2,res4,body2) {
            var token = body2.split('<meta name="csrf-token" data-token="')[1].split('" />')[0]
            if (token != undefined) {
                request({
                    headers: {
                        'User-Agent': 'Roblox/WinInet',
                        'X-CSRF-TOKEN': token,
                        Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com; rbx-ip2=; RBXEventTrackerV2=CreateDate=8/3/2022 9:41:35 AM&rbxid=&browserid=142191137782; GuestData=UserID=-725336160; _gcl_au=1.1.1743709023.1659537699; RBXSource=rbx_acquisition_time=8/3/2022 9:41:45 AM&rbx_acquisition_referrer=https://www.roblox.com/login?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fgames%2F9203864304%2Fraise-a-floppa%23%21%2Fgame-instances&rbx_medium=Direct&rbx_source=www.roblox.com&rbx_campaign=&rbx_adgroup=&rbx_keyword=&rbx_matchtype=&rbx_send_info=0`,
                    },
                    url: 'https://www.roblox.com/games/shutdown-all-instances',
                    form: {
                        placeId: req.body.split('#!')[0],
                        replaceInstances: false
                    },
                    method: 'POST'
                }, function(_,res20,body8) {
                    gotReq = true
                })
            } else {
                gotReq = true
            }
        },false,undefined)
        while (true) {
            if (gotReq != undefined) {
                break
            }
            await new Promise(r => setTimeout(r, 10));
        }
        await new Promise(r => setTimeout(r, 200));
        console.log('Shut down all servers')

        console.log('Uploading to roblox...')

        var file = valid
        file = file.split(`</OptionalCoordinateFrame>`)[0] + '</OptionalCoordinateFrame>\n</Properties>' + baseScriptString + file.split(`</OptionalCoordinateFrame>`)[1].replace('</Properties>','')
        file = file.replace('<bool name="HttpEnabled">false</bool>','<bool name="HttpEnabled">true</bool>')
        file = file.replace('<bool name="LoadStringEnabled">false</bool>','<bool name="LoadStringEnabled">true</bool>')

        RobloxRequest2('https://data.roblox.com/Data/Upload.ashx?assetid=' + req.body.split('#!')[0] /*4514053831'*/, 'POST', cookie, function(err,res2,body) {
            var token = ''
            var headers = res2.headers
            if (headers['x-csrf-token'] != undefined) {
                token = headers['x-csrf-token']
                RobloxRequest2('https://data.roblox.com/Data/Upload.ashx?assetid=' + req.body.split('#!')[0], 'POST', cookie, async function(err2,res4,body2) {
                    if (res4.statusCode == 200) {
                        console.log('Upload success!')
                        console.log('Starting game server')
                        res.status(200).send({id: id})
                        var maxAttempts = 15
                        var currentAttemps = 0
                        while (true) {
                            var response = undefined
                            RobloxRequest2('https://gamejoin.roblox.com/v1/join-game', 'POST', cookie, async function(err2,res4,body2) {
                                response = body2
                            },false,undefined,JSON.stringify({placeId: req.body.split('#!')[0],isPlayTogetherGame: false}))
                            while (true) {
                                if (response != undefined) {
                                    break
                                }
                                await new Promise(r => setTimeout(r, 200));
                            }
                            response = JSON.parse(response)
                            if (currentAttemps >= maxAttempts) {
                                break
                            }
                            if (response.joinScript != null) {
                                break
                            } else {
                                currentAttemps = currentAttemps +1
                            }
                        }
                        console.log('Game server started')
                        await new Promise(r => setTimeout(r, 2500));
                        var placeID = req.body.split('#!')[0]

                        MakeDSRequest('https://gamepersistence.roblox.com/persistence/getV2?placeId=' + placeID + '&type=standard&scope=' + 'global','&qkeys[0].scope=global&qkeys[0].target=0&qkeys[0].key=DebugStatus',cookie,async function(err,res,body) {
                            if (res.statusCode == 200) {
                                body = JSON.parse(body)
                                body.data[0].Value = body.data[0].Value.slice(1,(body.data[0].Value.length-1))
                                if (body.data[0] != undefined) {
                                    if (body.data[0].Value == id) {
                                        console.log('Unable to recieve logs')
                                        if (socketsWithId[id] != undefined) {
                                            idsNoWork[id] = true
                                            socketsWithId[id].emit('log','Unable to recieve logs','MessageError')
                                            await new Promise(r => setTimeout(r, 600));
                                            socketsWithId[id].emit('log','This is because the person running this site set the config incorrectly\nOr this is being hosted locally','MessageInfo')
                                        } else {
                                            idsNoWork[id] = false
                                        }
                                    } else {
                                        idsNoWork[id] = false
                                    }
                                } else {
                                    idsNoWork[id] = false
                                }
                            }
                        },placeID)
                    } else {
                        console.log('Failed to upload')
                        return res.status(400).send({'nope': 'no means no'})
                    }
                },true,token, file)
            } else {
                console.log('Failed to upload')
                return res.status(400).send({'nope': 'no means no'})
            }
        })
    }
})

var types = [
    'MessageOutput',
    'MessageInfo',
    'MessageWarning',
    'MessageError'
]

var socketsWithId = {}

app.post('/debug/get', function(req,res) {
    console.log(req.body)
    if (req.body != undefined) {
        if (idsYE[req.body.id] != undefined) {
            if (messageQueueYE[req.body.id] != undefined && messageQueueYE[req.body.id] != null) {
                res.status(200).send({'ye': messageQueueYE[req.body.id]})
                messageQueueYE[req.body.id] = null
            } else {
                res.status(200).send({'nope': 'nothing to see here'})
            }
        } else {
            res.status(200).send({'nope': 'nothing to see here'})
        }
    } else {
        res.status(200).send({'nope': 'nothing to see here'})
    }
})

app.post('/debug/messageOut', function(req,res) {
    console.log(req.body)
    if (req.body != undefined) {
        if (idsYE[req.body.id] != undefined) {
            if (true == true) { //types.includes(req.body.type)) {
                if (req.body.data != undefined) {
                    if (typeof(req.body.data) == 'string') { 
                        if (socketsWithId[req.body.id] != undefined) {
                            socketsWithId[req.body.id].emit('log',req.body.data,req.body.type)
                        }
                        res.status(200).send('yep')
                    } else {
                        res.status(400).send('nope')
                    }
                } else {
                    res.status(200).send('nope')
                }
            } else {
                res.status(200).send('nope')
            }
        } else {
            res.status(200).send('nope')
        }
    } else {
        res.status(200).send('nope')
    }
})

io.on('connection',async function(socket) {
    var yeeet = undefined
    socket.on('debug',function(id2) {
        if (socketsWithId[id2] == undefined) {
            if (idsYE[id2] != undefined) {
                yeeet = id2
                socketsWithId[id2] = socket
            }
        }
    })
    socket.on('send',function(yes) {
        if (yeeet != undefined) {
            if (yes != undefined) {
                if (typeof(yes) == 'string') {
                    if (idsNoWork[yeeet] != true) {
                        messageQueueYE[yeeet] = yes
                    } else {
                        if (socketsWithId[yeeet] != undefined) {
                            socketsWithId[yeeet].emit('log','> ' + yes,'MessageError')
                            socketsWithId[yeeet].emit('log','Cannot run this command','MessageInfo')
                        }
                    }
                }
            }
        }
    })
    socket.on('disconnecting',function() {
        if (yeeet != undefined) {
            delete socketsWithId[yeeet]
        }
    })
})

app.post('/logout', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    RobloxRequest('https://auth.roblox.com/v2/logout', 'POST', cookie, function(err,res2,body) {
        var token = ''
        var headers = res2.headers
        if (headers['x-csrf-token'] != undefined) {
            token = headers['x-csrf-token']
            RobloxRequest('https://auth.roblox.com/v2/logout', 'POST', cookie, function(err2,res4,body2) {
                if (res4.statusCode != 200) {
                    res.status(403).send(body2)
                } else {
                    res.cookie('ROBLOSECURITY',undefined,{
                        maxAge: new Date(0)
                    })
                    res.status(200).send(body2)
                }
            },true,token, JSON.stringify({}))
        } else {
            res.status(403).send(JSON.stringify({
                "errors": [
                    {
                        "code": 2,
                        "message": "Failed to get x-csrf-token when logging in",
                        "userFacingMessage": "Something went wrong",
                    }
                ]
            }))
        }
    })
})

var fs = require('fs')

app.post('/newPlace', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    var file = fs.readFileSync(__dirname + '/RoEditorFormat.rbxlx').toString('utf8')
    RobloxRequest('https://api.roblox.com/universes/create', 'POST', cookie, function(err,res2,body) {
        var token = ''
        console.log(body)
        var headers = res2.headers
        if (headers['x-csrf-token'] != undefined) {
            token = headers['x-csrf-token']
            RobloxRequest('https://api.roblox.com/universes/create', 'POST', cookie, function(err2,res4,body2) {
                if (res4.statusCode != 200) {
                    res.status(403).send(body2)
                } else {
                    body2 = JSON.parse(body2)
                    RobloxRequest2('https://data.roblox.com/Data/Upload.ashx?assetid=' + body2['RootPlaceId'], 'POST', cookie, async function(err2,res4,body4) {
                        if (res4.statusCode == 200) {
                            console.log('Created and uploaded place: ')
                            console.log(body2)
                            return res.status(200).send(body2['RootPlaceId'] + '|' + body2['UniverseId'])
                        } else {
                            console.log('Failed to upload')
                            return res.status(200).send({})
                        }
                    },true,token, file)
                }
            },true,token, JSON.stringify({templatePlaceIdToUse: 95206881}))
        } else {
            res.status(403).send(JSON.stringify({
                "errors": [
                    {
                        "code": 2,
                        "message": "Failed to get x-csrf-token when logging in",
                        "userFacingMessage": "Something went wrong",
                    }
                ]
            }))
        }
    },false,'token', JSON.stringify({templatePlaceIdToUse: 95206881}))
})

app.get('/getcurrentuser', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    RobloxRequest('https://users.roblox.com/v1/users/authenticated', 'GET', cookie, function(err,res2,body) {
        res.status(200).send(body)
    })
})

app.get('/getgamesmade', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    RobloxRequest('https://develop.roblox.com/v1/search/universes?q=%20archived:False%20creator:User&sort=-GameCreated&sortOrder=Desc&limit=50&cursor=', 'GET', cookie, function(err,res2,body) {
        res.status(200).send(body)
    })
})

app.post('/downloadasset', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    if (req.body.id === undefined) {
        return res.status(200).send({})
    }
    RobloxRequest('https://assetdelivery.roblox.com/v1/asset/?id=' + req.body.id, 'GET', cookie, function(err,res2,body) {
        res.status(200).send(body)
    })
})

app.post('/assetURL', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    if (req.body.id === undefined) {
        return res.status(200).send({})
    }
    RobloxRequest('https://assetdelivery.roblox.com/v2/asset?id=' + req.body.id, 'GET', cookie, function(err,res2,body4) {
        res.status(200).send(body4)
    })
})

app.post('/getgame', function (req, res) {
    if (req.body.id === undefined) {
        return res.status(200).send({})
    }
    RobloxRequest('https://games.roblox.com/v1/games?universeIds=' + req.body.id, 'GET', 'cookie', function(err,res2,body) {
        res.status(200).send(body)
    })
})

app.post('/getplace', function (req, res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }
    if (req.body.id === undefined) {
        return res.status(200).send({})
    }
    RobloxRequest('https://games.roblox.com/v1/games/multiget-place-details?placeIds=' + req.body.id, 'GET', cookie, function(err,res2,body) {
        res.status(200).send(body)
    })
})

app.post('/loadthumbnails', function(req,res) {
    var cookie = req.cookies['ROBLOSECURITY']
    if (cookie === undefined) {
        cookie = ''
        return res.status(200).send({})
    }

    var data = ''

    for (var attributename in req.body) {
        data = data + attributename + '%2C'
    }

    RobloxRequest('https://thumbnails.roblox.com/v1/games/icons?universeIds=' + data + '&size=256x256&format=Png&isCircular=false&returnPolicy=AutoGenerated', 'GET', cookie, function(err,res2,body) {
        res.status(200).send(body)
    })


})

app.post('/loadhead', function(req,res) {
    
    if (req.body.id === undefined) {
        return res.status(200).send({})
    }

    RobloxRequest('https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=' + req.body.id + '&size=150x150&format=png', 'GET', '', function(err,res2,body) {
        res.status(200).send(body)
    })

})

// This sounds very scary but since cors exists, I can't really do this in any other way.
// NO DATA IS STORED ON THE SERVER

app.post('/loginintoroblox', function(req,res) {
    RobloxRequest('https://auth.roblox.com/v2/login/', 'POST', '', function(err,res2,body) {
        var token = ''
        var headers = res2.headers
        if (headers['x-csrf-token'] != undefined) {
            token = headers['x-csrf-token']
            RobloxRequest('https://auth.roblox.com/v2/login/', 'POST', '', function(err2,res4,body2) {
                if (res4.statusCode != 200) {
                    res.status(403).send(body2)
                } else {
                    var indexYE = 0
                    res4.headers['set-cookie'].forEach(function(val,index) {
                        if (val.split('=')[0] == '.ROBLOSECURITY') {
                            indexYE = index
                        }
                    })
                    if (res4.headers['set-cookie'] != undefined) {
                        res.header("main-cookie", res4.headers['set-cookie'][indexYE].split('=')[1].split(';')[0]);
                    }
                    res.status(200).send(body2)
                }
            },true,token, JSON.stringify(req.body))
        } else {
            res.status(403).send(JSON.stringify({
                "errors": [
                    {
                        "code": 2,
                        "message": "Failed to get x-csrf-token when logging in",
                        "userFacingMessage": "Something went wrong",
                    }
                ]
            }))
        }
    })
})

function MakeDSRequest(url,body,cookie,callback,place) {
    request({
        headers: {
            'Roblox-Place-Id': place,
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `.ROBLOSECURITY=${cookie}; path=/; domain=.roblox.com;`
        },
        url: url,
        method: 'POST',
        body: body
    }, callback)
}

app.post('/getTicket', function(req,res) {
    var cookie = req.cookies['ROBLOSECURITY']
    RobloxRequest('https://auth.roblox.com/v2/logout', 'POST', cookie, function(err,res2,body) {
        var token = ''
        var headers = res2.headers
        if (headers['x-csrf-token'] != undefined) {
            token = headers['x-csrf-token']
            RobloxRequest('https://auth.roblox.com/v1/authentication-ticket/', 'POST', cookie, function(err2,res4,body2) {
                if (res4.statusCode != 200) {
                    res.status(403).send(body2)
                } else {
                    res.header("ticket", res4.headers['rbx-authentication-ticket']);
                    res.status(200).send(body2)
                }
            },true,token, JSON.stringify(req.body))
        } else {
            res.status(403).send({errors: 'could not get token'})
        }
    })
})

app.get('/upload',function(req,res) {
    res.sendFile(__dirname + '/upload.html')
})

const fun = require("funcaptcha")

app.post('/2step', async function(req,res) {
    if (req.body.challenge === undefined) {
        return res.status(403).send({})
    }
    if (req.body.code === undefined) {
        return res.status(403).send({})
    }
    if (req.body.type === undefined) {
        return res.status(403).send({})
    }
    if (req.body.id === undefined) {
        return res.status(403).send({})
    }
    RobloxRequest('https://twostepverification.roblox.com/v1/users/' + req.body.id +'/challenges/' + req.body.type + '/verify', 'POST', '', function(err,res2,body) {
        var token = ''
        var headers = res2.headers
        if (headers['x-csrf-token'] != undefined) {
            token = headers['x-csrf-token']
            RobloxRequest('https://twostepverification.roblox.com/v1/users/' + req.body.id +'/challenges/' + req.body.type + '/verify', 'POST', '', function(err2,res4,body2) {
                if (res4.statusCode != 200) {
                    res.status(403).send(body2)
                } else {
                    body2 = JSON.parse(body2)
                    RobloxRequest('https://auth.roblox.com/v3/users/' + req.body.id + '/two-step-verification/login', 'POST', '', function(err,res2,body4) {
                        if (res2.statusCode != 200) {
                            res.status(403).send(body)
                        } else {
                            console.log(body4)
                            if (res2.headers['set-cookie'] != undefined) {
                                var indexYE = 0
                                res2.headers['set-cookie'].forEach(function(val,index) {
                                    if (val.split('=')[0] == '.ROBLOSECURITY') {
                                        indexYE = index
                                    }
                                })
                                res.header("main-cookie", res2.headers['set-cookie'][indexYE].split('=')[1].split(';')[0]);
                            }
                            res.status(200).send(body4)
                        }
                    },true,token, JSON.stringify({
                        "challengeId": req.body.challenge,
                        "verificationToken": body2['verificationToken'],
                        "rememberDevice": false
                    }))
                }
            },true,token, JSON.stringify({
                "challengeId": req.body.challenge,
                "actionType": "Login",
                "code": req.body.code
              }))
        } else {
            res.status(403).send(JSON.stringify({
                "errors": [
                    {
                        "code": 2,
                        "message": "Failed to get x-csrf-token when logging in",
                        "userFacingMessage": "Something went wrong",
                    }
                ]
            }))
        }
    })
})

var sessionYE = {}
var sessionYEChallenge = {}

app.get('/img.png',async function(req,res) {
    if (req.query.token != undefined) {
        if (sessionYE[req.query.token] != undefined) {
            var challenge = sessionYEChallenge[req.query.token]
            res.status(200).send(await challenge.getImage())
        } else {
            res.status(403).send('no')
        }
    } else {
        res.status(403).send('no')
    }
})

app.get('/an',async function(req,res) {
    if (req.query.token != undefined) {
        if (sessionYE[req.query.token] != undefined) {
            if (Number(req.query.an) != NaN) {
                if (Number(req.query.an) > -1 && Number(req.query.an) < 6) {
                    var challenge = sessionYEChallenge[req.query.token]
                    var response = await challenge.answer(parseInt(req.query.an))
                    res.status(200).send(response)
                } else {
                    res.status(403).send('no')
                }
            } else {
                res.status(403).send('no')
            }
        } else {
            res.status(403).send('no')
        }
    } else {
        res.status(403).send('no')
    }
})

app.post('/makeChaptchaCorsRequest', async function(req,res) {
    var before = req.body.before
    if (before == undefined) {
        res.send(200).send('no')
    }
    const token = await fun.getToken({
        pkey: "476068BF-9607-4799-B53D-966BE98E2B81",
        surl: "https://roblox-api.arkoselabs.com",
        data: { 
            blob: before
        },
        headers: {
            "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        },
        site: "https://www.roblox.com"
        //proxy: "http://127.0.0.1:8888"
    })
    var session = new fun.Session(token)
    if (session.gameType != 3) {
        sessionYE[token.token.split('|')[0]] = token
        var challenge = await session.getChallenge()
        sessionYEChallenge[token.token.split('|')[0]] = challenge

        var messageYE = challenge.data.string_table['3.instructions-' + challenge.data.game_data.game_variant]
        res.status(200).send({token: token, show: messageYE, amount: challenge.data.game_data.waves})
    }
})

/*
MakeRobloxRequest('https://roblox-api.arkoselabs.com/fc/gfct/','POST',new URLSearchParams({
    data: 'init',
    render_type: 'canvas',
    token: data.token.split('|')[0],
    lang: 'en',
    sid: 'us-east-1',
    analytics_tier: 40,
}),false,async function(is,res) {
    console.log(res.responseText)
},true)
*/

const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')
const crypto = require('crypto')
var randomId = require('random-id')
var zlib = require('zlib')
const { connectors } = require("googleapis/build/src/apis/connectors")
const { reseller } = require("googleapis/build/src/apis/reseller")

function encrypt(text,key) {
    if (key.length < 32) {
        while (true) {
            if (key.length < 32) {
                key = key + 'A'
            } else {
                break
            }
        }
    } else {
        if (key.length > 32) {
            while (true) {
                if (key.length > 32) {
                    key = key.replace(key.charAt(key.length-1),'')
                } else {
                    break
                }
            }
        }
    }
    var iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text,key) {
    if (key.length < 32) {
        while (true) {
            if (key.length < 32) {
                key = key + 'A'
            } else {
                break
            }
        }
    } else {
        if (key.length > 32) {
            while (true) {
                if (key.length > 32) {
                    key = key.replace(key.charAt(key.length-1),'')
                } else {
                    break
                }
            }
        }
    }
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function replaceAt(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
}

var maxUploads = 3

function GenerateSaltFromIp(ip) {
    var allChars = 'poiuytrewqlkjhgfdsamnbvcxqyrftwunxdwwodnxowwjiowjqioqpiwpjzwhqwilxhsosnxosnxisnijesesieslqhxnlqxhddxwiowowxwwownwonakjwnklqlqllq2tfkrjvdfjqwertyuiolkjhgfdssdcdgfhvjbhiuftuf2ufsufuygksuswhuizwhziwuhswsiozjwioszjoiwjoiswzhoghiwgz'
    var chars = {}
    var length = (ip.split('.').length + (ip.replace(/[0-9]/g, '.')).split('.').length)
    length = length + (ip.length*length/4)
    var main = 'a'
    if (length < allChars.length) {
        main = allChars.charAt(length)
    }
    var otherChars = ''
    var total = 0
    for (let i = 0; i < (ip.match(/\d+/).length); i++) {
        total = total+Number((ip.match(/\d+/))[i])
    }
    while (true) {
        if (otherChars.length >= length) {            
            break
        } else {
            var algorithmCrap = Math.floor(otherChars.length+((length%(ip.length*length/(8^otherChars.length)))%((ip.length^(total-(length^(total/(8+otherChars.length))))))))
            var char = allChars.charAt(algorithmCrap)
            chars[char] = Math.floor((((algorithmCrap+(total^length))/((8^total)+ip.length))+(otherChars.length+1)))
            otherChars = otherChars + main
        }
    }
    for (var attributename in chars) {
        var pos = (Math.floor(chars[attributename])-1)
        otherChars = replaceAt(otherChars,pos,attributename)
    }
    return otherChars
}

function validXml(xmlFile){
    var xmlDoc;
    var error = false
    var parser = new DOMParser({errorHandler:{warning:function(w){error=true},error:function(w){error=true},fatalError:function(w){error=true}}})
    xmlDoc = parser.parseFromString(xmlFile,'application/xml')
    if (xmlDoc.documentElement != undefined && error == false) {
        const serializer = new XMLSerializer();
        const xmlStr = serializer.serializeToString(xmlDoc)
        return xmlStr
    } else {
        return false
    }
}

async function DoCrap() {
    app.post('/files/uploadXMLFIle',express.text({type: '*/*'}),async function(req,res) {
        console.log('-- START UPLOAD --')
        if (req.headers["content-type"] == 'application/xml' && req.body != undefined) {
            if (typeof(req.body) != 'string') {
                console.log('Invalid file type')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Invalid file type<br>Please try again!']})
            }
            if (req.body.split('#!')[1] == undefined) {
                console.log('Invalid secret')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Invalid password<br>Please try again!']})
            }
            if (req.body.split('#!')[0] == '') {
                console.log('Invalid secret')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Invalid password<br>Please try again!']})
            }
            var valid = validXml(req.body.split('#!')[1])
            if (valid == false) {
                console.log('Invalid file type')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Invalid file type<br>Please try again!']})
            }
            
            // -- START IP HASH --
            console.log('-- START IP HASH --')
            console.log('Generating salt from ip...')
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            if (ip.substr(0, 7) == "::ffff:") {
                ip = ip.substr(7)
            }
            var ipSalt = GenerateSaltFromIp(ip)
            console.log('Generated salt')
            console.log('Generating ip hash...')
            var ipHash = crypto.pbkdf2Sync(ip,ipSalt,1000, 64, `sha512`).toString(`hex`);
            console.log('Generated ip hash')
            console.log('Comparing ip hash to others')
            var found = await SearchFileById(undefined,ipHash)
            if (Array.isArray(found) == false) {
                console.log('Failed to get amount')
                console.log('--  END IP HASH  --')
                console.log('Assuming too many files uploaded')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Too many files have been uploaded from your network<br>Please try again']})   
            }
            if (found.length >= maxUploads) {
                console.log('Amount more than max: ' + found.length + '/' + maxUploads + ' files(s)')
                console.log('--  END IP HASH  --')
                console.log('Too many files uploaded')
                console.log('--  END UPLOAD  --')
                return res.status(400).send({'errors': ['<br>Too many files have been uploaded from your network<br>Please try again']})   
            } else {
                console.log('Amount less than max: ' + found.length + '/' + maxUploads + ' files(s)')
                console.log('--  END IP HASH  --')
            }
            // --  END IP HASH  --
            console.log('Hashing secret...')
            var saveData = {}
            var secret = req.body.split('#!')[0]
            saveData.salt = crypto.randomBytes(16).toString('hex');      
            saveData.hash = crypto.pbkdf2Sync(secret, saveData.salt,1000, 64, `sha512`).toString(`hex`);
            console.log('Hashed secret')
            console.log('Gzipping data...')
            var gzippedFile = zlib.gzipSync(valid)
            gzippedFile = gzippedFile.toString('hex')
            console.log('Gzipped data')
            console.log('Encrypting data')
            var encrypted = encrypt(gzippedFile,secret)
            var maxKb = 200
            console.log('Encrypted data with length of: ' + (encrypted.encryptedData.length/1000) + '/' + maxKb + ' kb')
            if (encrypted.encryptedData.length <= (maxKb*1000)) {
                console.log('Length good')
                var id = undefined
                saveData.file = encrypted
                console.log('Generating id...')
                while (true) {
                    var temp = randomId((Math.floor(Math.random() * 26)+1),'aA0')
                    var found = await SearchFileById(temp + "|")
                    if (Array.isArray(found) != false) {
                        if (found.length == 0) {
                            id = temp
                            break
                        }
                    }
                }
                console.log('Generated id')
                console.log('Uploading file to google drive...')
                var response = await UploadFile(saveData,id,ipHash)

                if (response == false) {
                    console.log('Google drive failed to upload')
                    console.log('--  END UPLOAD  --')    
                    return res.status(400).send({'errors': ['Failed Upload!']})   
                } else {
                    console.log('UPLOAD SUCCESSFUL')
                    console.log('--  END UPLOAD  --')
                    return res.status(200).send({id: id})
                }
            } else {
                console.log('File size too big')
                console.log('--  END UPLOAD  --')    
                return res.status(400).send({'errors': ['<br>File size too big<br>Please try again!']})
            }
        } else {
            console.log('Invalid file')
            console.log('--  END UPLOAD  --')
            return res.status(400).send({'errors': ['<br>Invalid file type<br>Please try again!']})
        }
    })
    app.post('/files/downloadXMLFIle',async function(req,res) {
        console.log('-- START DOWNLOAD --')
        if (req.body != undefined) {
            if (req.body.secret == undefined && req.body.id == undefined) {
                console.log('Invalid format')
                console.log('--  END DOWNLOAD  --')
                return res.status(400).send({'errors': ['Forbidden!']})
            }
            if (typeof(req.body.secret) != "string") {
                console.log('Invalid format')
                console.log('--  END DOWNLOAD  --')
                return res.status(400).send({'errors': ['Forbidden!']})
            }
            if (typeof(req.body.id) != "string" && typeof(req.body.id) != "number") {
                console.log('Invalid format')
                console.log('--  END DOWNLOAD  --')
                return res.status(400).send({'errors': ['Forbidden!']})
            }
            console.log('Finding file...')
            var dataYes = await SearchFileById(req.body.id + "|")
            if (Array.isArray(dataYes) != false) {
                if (dataYes.length == 0) {
                    console.log('File does not exist')
                    console.log('--  END DOWNLOAD  --')
                    return res.status(400).send({'errors': ['Forbidden!']})   
                }
            }
            console.log('File found')
            console.log('Downloading file...')
            dataYes = await DownloadFileById(dataYes[0].id)
            console.log('File downloaded')
            console.log('Comparing hash...')
            var hash = crypto.pbkdf2Sync(req.body.secret, dataYes.salt,1000, 64, `sha512`).toString(`hex`)
            if (hash == dataYes.hash) {
                console.log('Hash valid')
                console.log('Decrypting...')
                var decrypted = decrypt(dataYes.file,req.body.secret)
                console.log('Decrypted')
                console.log('Unzipping...')
                var unzipped = zlib.unzipSync(Buffer.from(decrypted,'hex'))
                console.log('Unzipped')
                console.log('DOWNLOAD SUCCESSFUL')
                console.log('--  END DOWNLOAD  --')
                return res.status(200).send(unzipped)
            } else {
                console.log('Hash invalid')
                console.log('--  END DOWNLOAD  --')    
                return res.status(400).send({'errors': ['Forbidden!']})
            }
        } else {
            console.log('No data sent')
            console.log('--  END DOWNLOAD  --')
            return res.status(400).send({'errors': ['Forbidden!']})
        }
    })
    app.use(function(req,res) {
        res.redirect('/')
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (ip.substr(0, 7) == "::ffff:") {
            ip = ip.substr(7)
        }
    })
    server.listen(process.env.PORT || 3000)
}

DoCrap()