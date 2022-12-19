
function PrintActivity(print) {
    console.log('[RoEditor] ' + print)
}

const origConsoleLog = console.log;
const logArr = [];
console.log = (...args) => {
  origConsoleLog.apply(console, args);
  logArr.push(args);
};
const logAll = () => {
  origConsoleLog.call(console, logArr.join('\n'));
};


var brickToRGB = {
    "1": "242, 243, 243",
    "2": "161, 165, 162",
    "3": "249, 233, 153",
    "5": "215, 197, 154",
    "6": "194, 218, 184",
    "9": "232, 186, 200",
    "11": "128, 187, 219",
    "12": "203, 132, 66",
    "18": "204, 142, 105",
    "21": "196, 40, 28",
    "22": "196, 112, 160",
    "23": "13, 105, 172",
    "24": "245, 205, 48",
    "25": "98, 71, 50",
    "26": "27, 42, 53",
    "27": "109, 110, 108",
    "28": "40, 127, 71",
    "29": "161, 196, 140",
    "36": "243, 207, 155",
    "37": "75, 151, 75",
    "38": "160, 95, 53",
    "39": "193, 202, 222",
    "40": "236, 236, 236",
    "41": "205, 84, 75",
    "42": "193, 223, 240",
    "43": "123, 182, 232",
    "44": "247, 241, 141",
    "45": "180, 210, 228",
    "47": "217, 133, 108",
    "48": "132, 182, 141",
    "49": "248, 241, 132",
    "50": "236, 232, 222",
    "100": "238, 196, 182",
    "101": "218, 134, 122",
    "102": "110, 153, 202",
    "103": "199, 193, 183",
    "104": "107, 50, 124",
    "105": "226, 155, 64",
    "106": "218, 133, 65",
    "107": "0, 143, 156",
    "108": "104, 92, 67",
    "110": "67, 84, 147",
    "111": "191, 183, 177",
    "112": "104, 116, 172",
    "113": "229, 173, 200",
    "115": "199, 210, 60",
    "116": "85, 165, 175",
    "118": "183, 215, 213",
    "119": "164, 189, 71",
    "120": "217, 228, 167",
    "121": "231, 172, 88",
    "123": "211, 111, 76",
    "124": "146, 57, 120",
    "125": "234, 184, 146",
    "126": "165, 165, 203",
    "127": "220, 188, 129",
    "128": "174, 122, 89",
    "131": "156, 163, 168",
    "133": "213, 115, 61",
    "134": "216, 221, 86",
    "135": "116, 134, 157",
    "136": "135, 124, 144",
    "137": "224, 152, 100",
    "138": "149, 138, 115",
    "140": "32, 58, 86",
    "141": "39, 70, 45",
    "143": "207, 226, 247",
    "145": "121, 136, 161",
    "146": "149, 142, 163",
    "147": "147, 135, 103",
    "148": "87, 88, 87",
    "149": "22, 29, 50",
    "150": "171, 173, 172",
    "151": "120, 144, 130",
    "153": "149, 121, 119",
    "154": "123, 46, 47",
    "157": "255, 246, 123",
    "158": "225, 164, 194",
    "168": "117, 108, 98",
    "176": "151, 105, 91",
    "178": "180, 132, 85",
    "179": "137, 135, 136",
    "180": "215, 169, 75",
    "190": "249, 214, 46",
    "191": "232, 171, 45",
    "192": "105, 64, 40",
    "193": "207, 96, 36",
    "194": "163, 162, 165",
    "195": "70, 103, 164",
    "196": "35, 71, 139",
    "198": "142, 66, 133",
    "199": "99, 95, 98",
    "200": "130, 138, 93",
    "208": "229, 228, 223",
    "209": "176, 142, 68",
    "210": "112, 149, 120",
    "211": "121, 181, 181",
    "212": "159, 195, 233",
    "213": "108, 129, 183",
    "216": "144, 76, 42",
    "217": "124, 92, 70",
    "218": "150, 112, 159",
    "219": "107, 98, 155",
    "220": "167, 169, 206",
    "221": "205, 98, 152",
    "222": "228, 173, 200",
    "223": "220, 144, 149",
    "224": "240, 213, 160",
    "225": "235, 184, 127",
    "226": "253, 234, 141",
    "232": "125, 187, 221",
    "268": "52, 43, 117",
    "301": "80, 109, 84",
    "302": "91, 93, 105",
    "303": "0, 16, 176",
    "304": "44, 101, 29",
    "305": "82, 124, 174",
    "306": "51, 88, 130",
    "307": "16, 42, 220",
    "308": "61, 21, 133",
    "309": "52, 142, 64",
    "310": "91, 154, 76",
    "311": "159, 161, 172",
    "312": "89, 34, 89",
    "313": "31, 128, 29",
    "314": "159, 173, 192",
    "315": "9, 137, 207",
    "316": "123, 0, 123",
    "317": "124, 156, 107",
    "318": "138, 171, 133",
    "319": "185, 196, 177",
    "320": "202, 203, 209",
    "321": "167, 94, 155",
    "322": "123, 47, 123",
    "323": "148, 190, 129",
    "324": "168, 189, 153",
    "325": "223, 223, 222",
    "327": "151, 0, 0",
    "328": "177, 229, 166",
    "329": "152, 194, 219",
    "330": "255, 152, 220",
    "331": "255, 89, 89",
    "332": "117, 0, 0",
    "333": "239, 184, 56",
    "334": "248, 217, 109",
    "335": "231, 231, 236",
    "336": "199, 212, 228",
    "337": "255, 148, 148",
    "338": "190, 104, 98",
    "339": "86, 36, 36",
    "340": "241, 231, 199",
    "341": "254, 243, 187",
    "342": "224, 178, 208",
    "343": "212, 144, 189",
    "344": "150, 85, 85",
    "345": "143, 76, 42",
    "346": "211, 190, 150",
    "347": "226, 220, 188",
    "348": "237, 234, 234",
    "349": "233, 218, 218",
    "350": "136, 62, 62",
    "351": "188, 155, 93",
    "352": "199, 172, 120",
    "353": "202, 191, 163",
    "354": "187, 179, 178",
    "355": "108, 88, 75",
    "356": "160, 132, 79",
    "357": "149, 137, 136",
    "358": "171, 168, 158",
    "359": "175, 148, 131",
    "360": "150, 103, 102",
    "361": "86, 66, 54",
    "362": "126, 104, 63",
    "363": "105, 102, 92",
    "364": "90, 76, 66",
    "365": "106, 57, 9",
    "1001": "248, 248, 248",
    "1002": "205, 205, 205",
    "1003": "17, 17, 17",
    "1004": "255, 0, 0",
    "1005": "255, 176, 0",
    "1006": "180, 128, 255",
    "1007": "163, 75, 75",
    "1008": "193, 190, 66",
    "1009": "255, 255, 0",
    "1010": "0, 0, 255",
    "1011": "0, 32, 96",
    "1012": "33, 84, 185",
    "1013": "4, 175, 236",
    "1014": "170, 85, 0",
    "1015": "170, 0, 170",
    "1016": "255, 102, 204",
    "1017": "255, 175, 0",
    "1018": "18, 238, 212",
    "1019": "0, 255, 255",
    "1020": "0, 255, 0",
    "1021": "58, 125, 21",
    "1022": "127, 142, 100",
    "1023": "140, 91, 159",
    "1024": "175, 221, 255",
    "1025": "255, 201, 201",
    "1026": "177, 167, 255",
    "1027": "159, 243, 233",
    "1028": "204, 255, 204",
    "1029": "255, 255, 204",
    "1030": "255, 204, 153",
    "1031": "98, 37, 209",
    "1032": "255, 0, 191"
}

var classes = {
	["Accessory"]: 32,
	["Accoutrement"]: 32,
	["AdvancedDragger"]: 41,
	["AdService"]: 73,
	["AlignOrientation"]: 110,
	["AlignPosition"]: 111,
	["Animation"]: 60,
	["AnimationController"]: 60,
	["AnimationTrack"]: 60,
	["Animator"]: 60,
	["ArcHandles"]: 56,
	["AssetService"]: 72,
	["Attachment"]: 92,
	["Backpack"]: 20,
	["BadgeService"]: 75,
	["BallSocketConstraint"]: 97,
	["BillboardGui"]: 64,
	["BinaryStringValue"]: 4,
	["BindableEvent"]: 66,
	["BindableFunction"]: 66,
	["BlockMesh"]: 8,
	["BloomEffect"]: 90,
	["BlurEffect"]: 90,
	["BodyAngularVelocity"]: 14,
	["BodyForce"]: 14,
	["BodyGyro"]: 14,
	["BodyPosition"]: 14,
	["BodyThrust"]: 14,
	["BodyVelocity"]: 14,
	["BoolValue"]: 4,
	["BoxHandleAdornment"]: 54,
	["BrickColorValue"]: 4,
	["Camera"]: 5,
	["CFrameValue"]: 4,
	["ChangeHistoryService"]: 118,
	["CharacterMesh"]: 60,
	["Chat"]: 33,
	["ClickDetector"]: 41,
	["CollectionService"]: 30,
	["Color3Value"]: 4,
	["ColorCorrectionEffect"]: 90,
	["ConeHandleAdornment"]: 54,
	["Configuration"]: 58,
	["ContentProvider"]: 72,
	["ContextActionService"]: 41,
	["ControllerService"]: 84,
	["CookiesService"]: 119,
	["CoreGui"]: 46,
	["CoreScript"]: 91,
	["CornerWedgePart"]: 1,
	["CustomEvent"]: 4,
	["CustomEventReceiver"]: 4,
	["CylinderHandleAdornment"]: 54,
	["CylinderMesh"]: 8,
	["CylindricalConstraint"]: 89,
	["Debris"]: 30,
	["Decal"]: 7,
	["Dialog"]: 62,
	["DialogChoice"]: 63,
	["DoubleConstrainedValue"]: 4,
	["Explosion"]: 36,
	["FileMesh"]: 8,
	["Fire"]: 61,
	["Flag"]: 38,
	["FlagStand"]: 39,
	["FloorWire"]: 4,
	["Folder"]: 70,
	["ForceField"]: 37,
	["Frame"]: 48,
	["FriendService"]: 121,
	["GamepadService"]: 84,
	["GamePassService"]: 19,
	["Geometry"]: 120,
	["Glue"]: 34,
	["GuiButton"]: 52,
	["GuiMain"]: 47,
	["GuiService"]: 47,
	["Handles"]: 53,
	["HapticService"]: 84,
	["Hat"]: 45,
	["HingeConstraint"]: 89,
	["Hint"]: 33,
	["HopperBin"]: 22,
	["HttpRbxApiService"]: 76,
	["HttpService"]: 76,
	["Humanoid"]: 9,
	["HumanoidController"]: 9,
	["ImageButton"]: 52,
	["ImageLabel"]: 49,
	["InsertService"]: 72,
	["IntConstrainedValue"]: 4,
	["IntValue"]: 4,
	["JointInstance"]: 34,
	["JointsService"]: 34,
	["Keyframe"]: 60,
	["KeyframeSequence"]: 60,
	["KeyframeSequenceProvider"]: 60,
	["Lighting"]: 13,
	["LineForce"]: 112,
	["LineHandleAdornment"]: 54,
	["LocalScript"]: 18,
	["LogService"]: 87,
	["LuaWebService"]: 91,
	["MarketplaceService"]: 106,
	["MeshContentProvider"]: 8,
	["MeshPart"]: 77,
	["Message"]: 33,
	["Model"]: 2,
	["ModuleScript"]: 71,
	["Motor"]: 34,
	["Motor6D"]: 34,
	["MoveToConstraint"]: 89,
	["NegateOperation"]: 78,
	["NetworkClient"]: 16,
	["NetworkReplicator"]: 29,
	["NetworkServer"]: 15,
	["NotificationService"]: 117,
	["NumberValue"]: 4,
	["ObjectValue"]: 4,
	["Pants"]: 44,
	["ParallelRampPart"]: 1,
	["Part"]: 1,
	["ParticleEmitter"]: 69,
	["PartPairLasso"]: 57,
	["PathfindingService"]: 37,
	["PersonalServerService"]: 121,
	["PhysicsService"]: 30,
	["Platform"]: 35,
	["Player"]: 11,
	["PlayerGui"]: 46,
	["Players"]: 11,
	["PlayerScripts"]: 82,
	["PointLight"]: 13,
	["PointsService"]: 83,
	["Pose"]: 60,
	["PrismaticConstraint"]: 89,
	["PrismPart"]: 1,
	["PyramidPart"]: 1,
	["RayValue"]: 4,
	["ReflectionMetadata"]: 86,
	["ReflectionMetadataCallbacks"]: 86,
	["ReflectionMetadataClass"]: 86,
	["ReflectionMetadataClasses"]: 86,
	["ReflectionMetadataEnum"]: 86,
	["ReflectionMetadataEnumItem"]: 86,
	["ReflectionMetadataEnums"]: 86,
	["ReflectionMetadataEvents"]: 86,
	["ReflectionMetadataFunctions"]: 86,
	["ReflectionMetadataMember"]: 86,
	["ReflectionMetadataProperties"]: 86,
	["ReflectionMetadataYieldFunctions"]: 86,
	["RemoteEvent"]: 80,
	["RemoteFunction"]: 79,
	["RenderHooksService"]: 122,
	["ReplicatedFirst"]: 72,
	["ReplicatedStorage"]: 72,
	["RightAngleRampPart"]: 1,
	["RocketPropulsion"]: 14,
	["RodConstraint"]: 89,
	["RopeConstraint"]: 89,
	["Rotate"]: 34,
	["RotateP"]: 34,
	["RotateV"]: 34,
	["RunService"]: 124,
	["RuntimeScriptService"]: 91,
	["ScreenGui"]: 47,
	["Script"]: 6,
	["ScriptContext"]: 82,
	["ScriptService"]: 91,
	["ScrollingFrame"]: 48,
	["Seat"]: 35,
	["Selection"]: 55,
	["SelectionBox"]: 54,
	["SelectionPartLasso"]: 57,
	["SelectionPointLasso"]: 57,
	["SelectionSphere"]: 54,
	["ServerScriptService"]: 115,
	["ServerStorage"]: 74,
	["Shirt"]: 43,
	["ShirtGraphic"]: 40,
	["SkateboardPlatform"]: 35,
	["Sky"]: 28,
	["SlidingBallConstraint"]: 89,
	["Smoke"]: 59,
	["Snap"]: 34,
	["SolidModelContentProvider"]: 77,
	["Sound"]: 11,
	["SoundGroup"]: 93,
	["SoundService"]: 31,
	["Sparkles"]: 42,
	["SpawnLocation"]: 25,
	["SpecialMesh"]: 8,
	["SphereHandleAdornment"]: 54,
	["SpotLight"]: 13,
	["SpringConstraint"]: 89,
	["StarterCharacterScripts"]: 82,
	["StarterGear"]: 20,
	["StarterGui"]: 46,
	["StarterPack"]: 20,
	["StarterPlayer"]: 88,
	["StarterPlayerScripts"]: 82,
	["Status"]: 2,
	["StringValue"]: 4,
	["SunRaysEffect"]: 90,
	["SurfaceGui"]: 64,
	["SurfaceLight"]: 13,
	["SurfaceSelection"]: 55,
	["Team"]: 24,
	["Teams"]: 23,
	["TeleportService"]: 81,
	["Terrain"]: 64,
	["TerrainRegion"]: 64,
	["TestService"]: 67,
	["TextBox"]: 51,
	["TextButton"]: 51,
	["TextLabel"]: 50,
	["TextService"]: 50,
	["Texture"]: 10,
	["TextureTrail"]: 4,
	["TimerService"]: 118,
	["Tool"]: 17,
	["Torque"]: 113,
	["TouchInputService"]: 84,
	["TouchTransmitter"]: 37,
	["TrussPart"]: 1,
	["TweenService"]: 109,
	["UnionOperation"]: 77,
	["UserInputService"]: 84,
	["Vector3Value"]: 4,
	["VehicleSeat"]: 35,
	["VelocityMotor"]: 34,
	["Visit"]: 123,
	["VRService"]: 95,
	["WedgePart"]: 1,
	["Weld"]: 34,
	["Workspace"]: 19,
	[""]: 116
}

function getOffFromIndex(name) {
    if (classes[name] != undefined) {
        var index = classes[name]
        var col = Math.floor((index/14)%14)
        var row = Math.floor(index%14)
        var pad = 2
        var border = 1
        var x = 0-(Math.ceil(-row - (pad*(row+1) + border)/16))
        var y = 0-(Math.ceil(-col - (pad*(col+1) + border)/16))
        if (x>13) {
            x=x-1
        }
        if (y>8) {
            y=y-1
        }
        return x*16 + ',' + y*16
    } else {
        return 0*16 + ',' + 0*16
    }
}

function GetIconFromName(name,parent) {
    var off = getOffFromIndex(name)
    var holderFrame = document.createElement('div')
    holderFrame.className = 'sizeFrame'
    var holderImage = document.createElement('img')
    holderImage.className = 'sizeImage'
    holderImage.src = '/iconSheet'
    holderImage.style.position = 'relative'
    holderImage.style.top = '-' + off.split(',')[1]*1.5 + 'px'
    holderImage.style.left = '-' + off.split(',')[0]*1.5 + 'px'
    holderFrame.appendChild(holderImage)
    parent.appendChild(holderFrame)
}

function color3ToRgba(color){
    const colorArray = []
    for(let i=0; i<4; i++){
      colorArray.push(color % 256)
      color>>>=8
    }
    const alpha = colorArray.pop() / 255
    return `rgba(${colorArray.reverse()},${alpha})`
  }
function MakeHeadersReadable(headers) {
    var arr = headers.trim().split(/[\r\n]+/);

    // Create a map of header names to values
    var headerMap = {};
    arr.forEach(function (line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headerMap[header] = value;
    });
    return headerMap
}
function MakeRobloxRequest(url, method, body, include, callback, isform) {
    var Req = new XMLHttpRequest();
    Req.open(method,url,true)
    Req.withCredentials = include;
    Req.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(true,Req)
            } else {
                PrintActivity('Something went wrong')
                callback(false,Req)
            }
        }
    }
    if (method != 'GET') {
        if (isform == true) {
            Req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        } else {
            Req.setRequestHeader('Content-type', 'application/json');
        }
        Req.send(body)
    } else {
        Req.send()
    }
}

function SelectElementByRef(ye) {
    var node2 = document.getElementById('explorerdiv').querySelector('[object="' + ye + '"]')
    if (node2 == null) {
        var objectfound4 = xmlFormatted.querySelector("[referent=" + ye + "]")
        while (true) {
            if (document.getElementById('explorerdiv').querySelector('[object="' + ye + '"]') != null) {
                break
            }
            var parent = objectfound4
            while (true) {
                if (parent.parentElement != document.getElementById('explorerdiv')) {
                    if (document.getElementById('explorerdiv').querySelector('[object="' + parent.parentElement.getAttribute('referent') + '"]') != null) {
                        var node = document.getElementById('explorerdiv').querySelector('[object="' + parent.parentElement.getAttribute('referent') + '"]')
                        var objectfound2 = xmlFormatted.querySelector("[referent=" + node.getAttribute('object') + "]")
                        if (objectfound2.children[1] != undefined) {
                            node.innerHTML = "⠀⠀" + node.getAttribute('original') + ' ▼'
                            GetIconFromName(objectfound2.getAttribute('class'),node)
                        }
                        var m = {
                            target: node
                        }
                        clickYE(m,parent,objectfound2,node)
                        break
                    } else {
                        parent = parent.parentElement
                    }
                } else {
                    break
                }
            }
            if (document.getElementById('explorerdiv').querySelector('[object="' + ye + '"]') != null) {
                break
            }
        }
    }
    var node = document.getElementById('explorerdiv').querySelector('[object="' + ye + '"]')
    var parent = document.getElementById('properties')
    var objectfound2 = xmlFormatted.querySelector("[referent=" + node.getAttribute('object') + "]")
    node.scrollIntoView()
    var m = {
        target: node
    }
    if (objectfound2.children[1] != undefined) {
        node.innerHTML = "⠀⠀" + node.getAttribute('original') + ' ▼'
        GetIconFromName(objectfound2.getAttribute('class'),node)
    }
    clickYE(m,parent,objectfound2,node)
}

function readXml(xmlFile){
    var xmlDoc;
    var parser = new DOMParser()
    xmlDoc = parser.parseFromString(xmlFile,'application/xml')
    return xmlDoc
}

function insertAfter(referenceNode, newNode) {
    document.getElementById('explorerdiv') .insertBefore(newNode, referenceNode);
} 

var xmlFormatted2 = ''
var xmlFormatted = ''
var mainObject = ''
var currentSelection = ''
var childtable = {}
var allowchangeproperty = true
var camera = ''
var scene = ''
var renderer = ''
var mouse = new THREE.Vector2();
var target = new THREE.Vector2();
var buttondown = ''
var outlinePass = ''
var composer = ''
var windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
var currentmovement = ''
var allowedclasses = ['Workspace','Players','Lighting','ReplicatedFirst','ReplicatedStorage','ServerScriptService','ServerStorage','StarterGui','StarterPack','StarterPlayer','SoundService','Chat','LocalizationService','TestService']
var limitedproperites = [
    'AttributesSerialize',
    'WorldPivotData',
    'UniqueId'
]

async function PlayGame(placeid) {
    MakeRobloxRequest('/getTicket', 'POST', JSON.stringify({}), true, function(is,res) {
        if (res.status == 200) {
            var headers = MakeHeadersReadable(res.getAllResponseHeaders())
            if (headers['ticket'] != undefined) {
                var ticket = headers['ticket']
                window.open("roblox-player:1+launchmode:play+gameinfo:" + ticket + "+launchtime:" + "555" + "+placelauncherurl:https://assetgame.roblox.com/game/PlaceLauncher.ashx?request=RequestGame&browserTrackerId=60604189768&placeId=" + placeid + "&isPlayTogetherGame=true+browsertrackerid:24972424+robloxLocale:en_us+gameLocale:en_us")
            }
        } else {
            window.oe
        }
    })
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
async function convertToXML() {
    var button = document.getElementById('testbtn')
    var currentFrame = undefined
    window.addEventListener("message", (event) => {
        if (event.data == "close") {
            currentFrame.remove()
        }
      }, false);
    button.onclick = async function() {
        const serializer = new XMLSerializer();
        const xmlStr = serializer.serializeToString(xmlFormatted)
        var frame = document.createElement('iframe')
        frame.style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
        frame.src = "/upload"
        document.body.appendChild(frame)
        currentFrame = frame
        /*
        console.log('Uploading file...')
        var response = undefined
        var status = undefined
        await fetch('/files/uploadXMLFIle', {
            method: 'POST',
            body: 'abcd#!' + xmlStr,
            headers: {
                'Content-Type': 'application/xml'
            }
        })
            .then(res => {
                status = res.status
                return res.json()
            })
            .then(res => {
                response = res
            })
        if (status == 200) {
            console.log('Upload successful')
            console.log('Downloading File...')
            var response4 = undefined
            var status4 = undefined
            await fetch('/files/downloadXMLFIle', {
                method: 'POST',
                body: JSON.stringify({
                    id: response.id,
                    secret: 'abcd'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    status4 = res.status
                    return res.text()
                })
                .then(res => {
                    response4 = res
                })
            if (status4 == 200) {
                console.log(response4)
            } else {
                console.log('Download failed')
            }
        } else {
            console.log('Upload unsuccessful')
        }
        //download('File.rbxlx',xmlStr)
        */
    }
}

async function clearObjectChildren(objectXML) {
    var table = childtable[objectXML.getAttribute('object')]
    childtable[objectXML.getAttribute('object')] = {}
    if (table != undefined) {
        if (Object.keys(table).length >= 1) {
            for (var attributename in table) {
                var thing = document.getElementById('explorerdiv').querySelector('[object="' + attributename + '"]')
                thing.remove()
                clearObjectChildren(thing)
            }
        }
    }
}

var objTypes = {
    MessageOutput: 'linear-gradient(rgba(244, 244, 244, 0.5), rgba(200, 200, 200, 0.5))',
    MessageInfo: 'linear-gradient(rgba(0, 0, 244, 0.5), rgba(0, 0, 200, 0.5))',
    MessageWarning: 'linear-gradient(rgba(244, 244, 0, 0.5), rgba(200, 200, 0, 0.5))',
    MessageError: 'linear-gradient(rgba(244, 0, 0, 0.5), rgba(200, 0, 0, 0.5))'
}

var textTypes = {
    MessageOutput: '⠀',
    MessageInfo: '⠀[INFO]: ',
    MessageWarning: '⠀⚠ [WARNING]: ',
    MessageError: '⠀✕ [ERROR]: '
}

async function initWebGL() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('rgb(22, 169, 243)')
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2500)
    var properties = xmlFormatted.querySelector('[class="Workspace"]').querySelector('[class="Camera"]').children[0]
    console.log(properties)
    var cframe = properties.querySelector('[name="CFrame"]')
    if (cframe == null) {
        cframe = properties.querySelector('[name="CoordinateFrame"]')
    }
    var posx = cframe.getElementsByTagName('X')[0].textContent
    var posy = cframe.getElementsByTagName('Y')[0].textContent
    var posz = cframe.getElementsByTagName('Z')[0].textContent
    var R00 = cframe.getElementsByTagName('R00')[0].textContent
    var R01 = cframe.getElementsByTagName('R01')[0].textContent
    var R02 = cframe.getElementsByTagName('R02')[0].textContent
    var R10 = cframe.getElementsByTagName('R10')[0].textContent
    var R11 = cframe.getElementsByTagName('R11')[0].textContent
    var R12 = cframe.getElementsByTagName('R12')[0].textContent
    var R20 = cframe.getElementsByTagName('R20')[0].textContent
    var R21 = cframe.getElementsByTagName('R21')[0].textContent
    var R22 = cframe.getElementsByTagName('R22')[0].textContent
    var matrix = new THREE.Matrix4(); // create once and reuse it
    matrix.set(
        R00,R01,R02,  posx,
        R10,R11,R12,  posy,
        R20,R21,R22,  posz,
        0,   0,   0,  1
    );

    var myquat = new THREE.Quaternion()
    myquat.setFromRotationMatrix(matrix)

    camera.applyQuaternion(myquat);
    camera.quaternion.normalize()

    camera.position.set(posx,posy,posz)
    scene.add(new THREE.HemisphereLight(0xffffff,0xffffff,1.0))
    document.getElementById('allBeforeLoad').appendChild(renderer.domElement)
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function mYes(name) {
    socket.emit('send',name)
}

Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
    object.rotateX(THREE.MathUtils.degToRad(degreeX));
    object.rotateY(THREE.MathUtils.degToRad(degreeY));
    object.rotateZ(THREE.MathUtils.degToRad(degreeZ));
}

async function LoadWorkspaceItems(liveItems) {
    boxes = {}
    const items = liveItems
    //console.log(xmlFormatted.querySelector('[class="Workspace"]').querySelector('[class="Decal"]'))
    for (amount = 0; amount < items.length; amount++) {
        var object = items[amount]
        if (amount > 700) { 
            break
        }
        if (object.ClassName.includes('Part') == true) {
            var properties = object
            console.log(properties)
            if (properties != undefined) {
                try {
                    //var color = properties.querySelector('[name="Color3uint8"]')
                    //var color2 = properties.querySelector('[name="BrickColor"]')
                    //var cframe = properties.querySelector('[name="CFrame"]')
                    var size = properties.Size.replaceAll(' ','')
                    var transparency = (1-Number(properties.Transparency))
                    var size = properties.Size.replaceAll(' ','')
                    var color = properties.Color.replaceAll(' ','')
                    var colorR = Math.floor((Number(color.split(',')[0])*255))
                    var colorG = Math.floor((Number(color.split(',')[1])*255))
                    var colorB = Math.floor((Number(color.split(',')[2])*255))
                    var positionYE = properties.Position.replaceAll(' ','')
                    var rotationYE = properties.Rotation.replaceAll(' ','')
                    var posx = Number(positionYE.split(',')[0])
                    var posy = Number(positionYE.split(',')[1])
                    var posz = Number(positionYE.split(',')[2])
                    var sizex = Number(size.split(',')[0])
                    var sizey = Number(size.split(',')[1])
                    var sizez = Number(size.split(',')[2])
                    var rotationX = Number(rotationYE.split(',')[0])
                    var rotationY = Number(rotationYE.split(',')[1])
                    var rotationZ = Number(rotationYE.split(',')[2])
                    const box = new THREE.BoxGeometry(parseInt(sizex), parseInt(sizey), parseInt(sizez))
                    // outlinePass.selectedObjects = box;
                    
                    var colorYe = 'rgba(' + colorR + ',' + colorG + ',' + colorB + ',1)'
                    
                    /*
                    if (color != undefined) {
                        colorYe = color3ToRgba(color.textContent)
                    }

                    if (color2 != undefined && color2 != '') {
                        console.log(color2.textContent)
                        colorYe = 'rgba(' + brickToRGB[color2.textContent] + ',1)'
                    }
                    */

                    console.log(colorYe)
                    var material = new THREE.MeshMatcapMaterial( { color: colorYe} );
                    /*
                    if (false != false) {
                        var id = object.querySelector('[class="Decal"]').children[0].querySelector('[name="Texture"]').textContent.replace(/\D/g, '')
                        MakeRobloxRequest('/assetURL','POST', JSON.stringify({id: id}),true,function(is,res) {
                            var bodyYE = JSON.parse(res.responseText)
                            if (bodyYE.locations != undefined) {
                                var loader = new THREE.TextureLoader();
                                loader.load(bodyYE.locations[0].location, function ( texture ) {
                                    material = new THREE.MeshMatcapMaterial( { color: colorYe, map: texture } );
                                })
                            } else {
                                material = new THREE.MeshMatcapMaterial( { color: colorYe} );
                            }
                        })
                        while (true) {
                            if (material != undefined) {
                                break
                            }
                            await new Promise(r => setTimeout(r, 10));
                        }
                    } else {
                        material = new THREE.MeshMatcapMaterial( { color: colorYe} );
                    }
                    */

                    if (transparency != 1) {
                        material.transparent = true
                        material.opacity = transparent
                    }

                    console.log(sizex)
                    console.log(sizey)
                    console.log(sizez)

                    const mesh = new THREE.Mesh(box,material)
                    //mesh.quaternion.setFromRotationMatrix( matrix );
                    mesh.position.set(parseInt(posx), parseInt(posy), parseInt(posz))
                    
                    console.log(mesh)

                    rotateObject(mesh, rotationX, rotationY, rotationZ);

                    //boxes[object.getAttribute('referent')] = [box,[parseInt(posx),parseInt(posy),parseInt(posz)],mesh,matrix]

                    //ids[mesh.uuid] = object.getAttribute('referent')
                    scene.add(mesh)
                    
                    console.log(mesh)

                    /*
                    const dir = new THREE.Vector3( parseInt(posx),parseInt(posy),parseInt(posz) );

                    dir.normalize();

                    const origin = new THREE.Vector3(parseInt(posx),parseInt(posy),parseInt(posz));
                    const length = 4;
                    const hex = 0xffff00;

                    const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
                    scene.add( arrowHelper );
                    */
                
                    renderer.render(scene,camera)
                } catch(e) {
                    console.log(e)
                }
            }
        }
    }
}

function RefreshLive(liveItems) {
    console.log('ReRendering scene for live update')
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        obj = scene.children[i];
        scene.remove(obj); 
    }
    LoadWorkspaceItems(liveItems)
}

async function debug() {
    const iconButtonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-icon-button'));
    iconButtonRipple.unbounded = true;
    const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    const buttonRipple = new mdc.ripple.MDCRipple(document.getElementById('btnYe'));
    const bar = new mdc.snackbar.MDCSnackbar(document.getElementById('uploading'));
    const yes = new mdc.linearProgress.MDCLinearProgress(document.getElementById('progressbar'));
    const yes2 = new mdc.linearProgress.MDCLinearProgress(document.getElementById('progressbar2'));

    iconButtonRipple.root.onclick = function() {
        dialog.open()
    }

    var started = false
    var idCheck = undefined
    var checkFor = undefined

    buttonRipple.root.onclick = async function() {
        //socket.connect()
        checkFor = undefined
        yes2.foundation.close()
        buttonRipple.root.disabled = true
        bar.labelText = 'Uploading to roblox...'
        yes.foundation.setDeterminate(false)
        bar.timeoutMs = -1
        bar.open()
        yes.foundation.open()
        var response4 = undefined
        var status4 = undefined
        const serializer = new XMLSerializer();
        const xmlStr = serializer.serializeToString(xmlFormatted)
        const cookies = new URLSearchParams(document.cookie.replaceAll('; ', '&'));
        await fetch('/debug',{
            method: 'POST',
            headers: {
                'content-type': 'application/xml'
            },
            body: cookies.get('dataYE').split('|')[0] + '#!' + xmlStr
        })
            .then(res => {
                status4 = res.status
                return res.json()
            })
            .then(res => {
                response4 = res
            })
        console.log(status4)
        if (status4 == 200) {
            console.log(response4.id)
            started = false
            idCheck = response4.id
            bar.labelText = 'Starting game server...'
            //socket.emit('debug',response4.id)
        }
    }    

    document.getElementById('runCommand').onblur = function(m4) {
        if (m4.target.value != '') {
            var valYe = m4.target.value
            m4.target.value = ''
            mYes(valYe)
            yes2.foundation.setDeterminate(false)
            yes2.foundation.open()
            checkFor = valYe
        }
    }

    loadExplorer()

    document.getElementById('close').onclick = async function() {
        idCheck = undefined
        document.getElementById('loggerDiv').style = "display: block; animation-name: ye2; overflow-y: scroll;"
        await new Promise(r => setTimeout(r, 500));
        document.getElementById('runCommand').style.display = 'none'
        await new Promise(r => setTimeout(r, 500));
        buttonRipple.root.disabled = false
        document.getElementById('updateText').remove()
        document.getElementsByClassName('explorer1')[0].style.display = 'block'
        document.getElementsByClassName('explorer2')[0].style.display = 'block'
        document.getElementsByClassName('explorer3')[0].style.display = 'block'
        document.getElementsByClassName('properties1')[0].style.display = 'block'
        document.getElementsByClassName('properties2')[0].style.display = 'block'
        document.getElementsByClassName('properties3')[0].style.display = 'block'
        RerenderScene()
        document.getElementById('loggerDiv').style = "display: none; animation-name: ye; top: calc(100% + 4px); overflow-y: scroll;"
    }

    while (true) {
        if (idCheck != undefined) {
            var response4 = undefined
            var status4 = undefined
            await fetch('/getStatus?id=' + idCheck,{
                method: 'GET',
            })
                .then(res => {
                    status4 = res.status
                    return res.json()
                })
                .then(res => {
                    response4 = res
                })
            if (status4 == 200) {
                if (response4[0] == undefined & response4.status != undefined) {
                    if (response4.status == 'first_log') {
                        bar.labelText = 'Waiting for logger to start...'
                    }
                } else {
                    var responseData8 = response4.logs || []
                    if (response4.workspaceData != undefined) {
                        console.log('Got workspace data:')
                        console.log(response4.workspaceData)
                        RefreshLive(response4.workspaceData)
                        if (started == false) {
                            document.getElementsByClassName('explorer1')[0].style.display = 'none'
                            document.getElementsByClassName('explorer2')[0].style.display = 'none'
                            document.getElementsByClassName('explorer3')[0].style.display = 'none'
                            document.getElementsByClassName('properties1')[0].style.display = 'none'
                            document.getElementsByClassName('properties2')[0].style.display = 'none'
                            document.getElementsByClassName('properties3')[0].style.display = 'none'
                            document.body.insertAdjacentHTML('afterbegin', '<div id="updateText" style=" width: 100%; height: 25px; z-index: 100; font-weight: bold; text-align: center; position: absolute; background-color: rgb(159, 227, 100); box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%); ">LIVE updating server view, updates ~5.8 seconds</div>')
                        } else {
                            document.getElementById('updateText').style.backgroundColor = 'orange'
                            document.getElementById('updateText').innerHTML = 'Updating...'
                        }
                    } else {
                        document.getElementById('updateText').style.backgroundColor = 'rgb(159, 227, 100)'
                        document.getElementById('updateText').innerHTML = 'LIVE updating server view, updates ~5.8 seconds'
                    }
                    responseData8.forEach(async function(responseTest) {
                        var data = responseTest[0]
                        var type = responseTest[1].split('Enum.MessageType.')[1]
                        console.log(data + type)
                        if (started == false) {
                            started = true
                            bar.close()
                            var loop13 = document.getElementById('loggerDiv').getElementsByClassName('yar')
                            for (amount24 = 0; amount24 < loop13.length; amount++) {
                                var object84 = loop13[amount24]
                                object84.remove()
                            }
                            document.getElementById('loggerDiv').style = "display: block; overflow-y: scroll;"
                            await new Promise(r => setTimeout(r, 500));
                            document.getElementById('runCommand').style.display = 'block'
                        }
                        if (checkFor != undefined) {
                            if (data.includes(checkFor)) {
                                yes2.foundation.close()
                            }
                        }
                        type = type.replace('Enum.MessageType.','')
                        if (data.split('\n').length > 0) {
                            data.split('\n').forEach(function(val) {
                                data = val
                                var color = objTypes[type]
                                started = true
                                var divlog = document.createElement('div')
                                divlog.innerHTML = textTypes[type] + data
                                divlog.className = 'yar'
                                if (document.getElementById(document.getElementById('loggerDiv').children.length) != undefined) {
                                    document.getElementById(document.getElementById('loggerDiv').children.length).remove()
                                }
                                divlog.id = document.getElementById('loggerDiv').children.length
                                divlog.style = 'background-image: ' + color + ';cursor: pointer;user-select: none;font-size: 20px;color: rgb(0, 0, 0);'
                                document.getElementById('loggerDiv').appendChild(divlog)    
                            })
                        } else {
                            var color = objTypes[type]
                            started = true
                            var divlog = document.createElement('div')
                            divlog.innerHTML = textTypes[type] + data
                            if (document.getElementById(document.getElementById('loggerDiv').children.length) != undefined) {
                                document.getElementById(document.getElementById('loggerDiv').children.length).remove()
                            }
                            divlog.id = document.getElementById('loggerDiv').children.length
                            divlog.className = 'yar'
                            divlog.style = 'background-image: ' + color + ';cursor: pointer;user-select: none;font-size: 20px;color: rgb(0, 0, 0);'
                            document.getElementById('loggerDiv').appendChild(divlog)
                        }
                    })
                }
            }
        }
        await new Promise(r => setTimeout(r, 500));
    }

    /*
    socket.on('finishing', async function() {
        bar.labelText = 'Waiting for logger to start...'
    })

    socket.on('log', async function(data,type) {
        console.log(data + type)
        if (started == false) {
            started = true
            bar.close()
            var loop = document.getElementById('loggerDiv').getElementsByClassName('yar')
            for (amount = 0; amount < loop.length; amount++) {
                var object = loop[amount]
                console.log(object.innerHTML)
                object.remove()
            }
            document.getElementById('loggerDiv').style = "display: block; overflow-y: scroll;"
            await new Promise(r => setTimeout(r, 500));
            document.getElementById('runCommand').style.display = 'block'
            var loop = document.getElementById('loggerDiv').getElementsByClassName('yar')
            for (amount = 0; amount < loop.length; amount++) {
                var object = loop[amount]
                console.log(object.innerHTML)
                object.remove()
            }
        }
        if (checkFor != undefined) {
            if (data.includes(checkFor)) {
                yes2.foundation.close()
            }
        }
        type = type.replace('Enum.MessageType.','')
        if (data.split('\n').length > 0) {
            data.split('\n').forEach(function(val) {
                data = val
                var color = objTypes[type]
                started = true
                var divlog = document.createElement('div')
                divlog.innerHTML = textTypes[type] + data
                divlog.className = 'yar'
                if (document.getElementById(document.getElementById('loggerDiv').children.length) != undefined) {
                    document.getElementById(document.getElementById('loggerDiv').children.length).remove()
                }
                divlog.id = document.getElementById('loggerDiv').children.length
                divlog.style = 'background-image: ' + color + ';cursor: pointer;user-select: none;font-size: 20px;color: rgb(0, 0, 0);'
                document.getElementById('loggerDiv').appendChild(divlog)    
            })
        } else {
            var color = objTypes[type]
            started = true
            var divlog = document.createElement('div')
            divlog.innerHTML = textTypes[type] + data
            if (document.getElementById(document.getElementById('loggerDiv').children.length) != undefined) {
                document.getElementById(document.getElementById('loggerDiv').children.length).remove()
            }
            divlog.id = document.getElementById('loggerDiv').children.length
            divlog.className = 'yar'
            divlog.style = 'background-image: ' + color + ';cursor: pointer;user-select: none;font-size: 20px;color: rgb(0, 0, 0);'
            document.getElementById('loggerDiv').appendChild(divlog)
        }
    })
    */
}

var renderSettings = ['CFrame','Color3uint8','size']
var boxes = {}
var ids = {}
var currentOutline = undefined

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function loadCreateMenu(parent) {
    document.getElementById('back').style.display = 'block'
    document.getElementById('createMenu').style.display = 'block'
    document.getElementById('createMenutitle').style.display = 'block'
    document.getElementsByClassName('svgcreate')[0].style.display = 'block'
    document.getElementsByClassName('svgcreate2')[0].style.display = 'block'
    const items = xmlFormatted2.getElementsByTagName('roblox')[0].children
    var thing2 = document.createElement('input')
    thing2.style.outline = 'none'
    thing2.style.border = 'none'
    thing2.style.width = '100%'
    thing2.setAttribute('placeholder','Search')
    thing2.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
    thing2.style.cursor = "pointer"
    thing2.style.height = '45px'
    thing2.style.userSelect = 'none'
    thing2.style.fontSize = '30px'
    thing2.style.color = 'rgb(0,0,0)'
    thing2.style.padding = '20px'
    function thingYAR(m) {
        var items2 = document.getElementById('createMenu').children
        if (m.target.value != '') {
            console.log(m.target.value)
            for (amount = 0; amount < items2.length; amount++) {
                var object = items2[amount]
                if (object.tagName != 'INPUT') {
                    var classYE = object.getAttribute('class')
                    if (classYE.toLowerCase().includes(m.target.value.toLowerCase())) {
                        object.style.display = 'block'
                    } else {
                        object.style.display = 'none'
                    }
                }
            }
        } else {
            for (amount = 0; amount < items2.length; amount++) {
                var object = items2[amount]
                object.style.display = 'block'
            }
        }
    }
    thing2.onchange = thingYAR 
    thing2.onpropertychange = thingYAR
    thing2.onkeyuponpaste = thingYAR
    thing2.oninput = thingYAR
    document.getElementById('createMenu').appendChild(thing2)
    for (amount = 0; amount < items.length; amount++) {
        var object = items[amount]
        var thing = document.createElement('div')
        thing.setAttribute('class',object.getAttribute('class'))
        thing.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
        thing.style.cursor = "pointer"
        thing.style.height = '30px'
        thing.setAttribute('par',parent)
        thing.style.userSelect = 'none'
        thing.style.fontSize = '20px'
        thing.style.color = 'rgb(0,0,0)'
        thing.onclick = function(m) {
            var ref = m.target.getAttribute('par')
            var parent = document.getElementById('createMenu')
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            document.getElementById('back').style.display = 'none'
            document.getElementById('createMenu').style.display = 'none'
            document.getElementById('createMenutitle').style.display = 'none'
            document.getElementsByClassName('svgcreate')[0].style.display = 'none'
            document.getElementsByClassName('svgcreate2')[0].style.display = 'none'
            SelectElementByRef(ref)
            if (currentSelection != '') {
                if (currentSelection.getAttribute('object') == ref) {
                    SelectElementByRef(ref)
                }
            }
            var element = xmlFormatted2.querySelector('[class="' + m.target.getAttribute('class') +'"]')
            var element2 = xmlFormatted.querySelector('[referent="' + ref +'"]')
            element2.appendChild(element)
            var ref2 = 'RBX' + makeid(32)
            element.setAttribute('referent',ref2)
            element.children[0].querySelector('[name="Name"]').textContent = m.target.getAttribute('class')
            SelectElementByRef(ref)
            SelectElementByRef(ref2)
            RerenderScene()
        }
        thing.innerHTML = "⠀⠀" + object.getAttribute('class')
        GetIconFromName(object.getAttribute('class'),thing)
        document.getElementById('createMenu').appendChild(thing)
    }
}

function handleArrayBuffer(arrayBuffer) {
    try {
        var array = new Uint8Array(arrayBuffer);
        var totalBytes = array.length * array.BYTES_PER_ELEMENT;
        var pointer = Module._malloc(totalBytes);
        var dataHeap = new Uint8Array(Module.HEAPU8.buffer, pointer, totalBytes);
        dataHeap.set(array);

        var xmlBufferPointer = Module._to_xml(pointer, 5);
        var xmlPointer = Module.getValue(xmlBufferPointer, 'i16*');
        var size = Module.getValue(xmlBufferPointer + 4, 'i32');
        var outputBuffer = new Uint8Array(Module.HEAPU8.buffer, xmlPointer, size);
        var textDecoder = new TextDecoder()
        var decoded = textDecoder.decode(outputBuffer)
        return decoded
    } catch(e) {
        console.log('uh oh')
        console.log(e)
        return false
    }
}

async function ShowWebGLItems() {
    boxes = {}
    const items = xmlFormatted.querySelector('[class="Workspace"]').getElementsByTagName('Item')
    //console.log(xmlFormatted.querySelector('[class="Workspace"]').querySelector('[class="Decal"]'))
    for (amount = 0; amount < items.length; amount++) {
        var object = items[amount]
        if (amount > 700) { 
            break
        }
        if (object.getAttribute('class').includes('Part') == true) {
            var properties = object.children[0]
            if (properties != undefined) {
                try {
                    var color = properties.querySelector('[name="Color3uint8"]')
                    var color2 = properties.querySelector('[name="BrickColor"]')
                    var cframe = properties.querySelector('[name="CFrame"]')
                    var size = properties.querySelector('[name="size"]')
                    var posx = cframe.getElementsByTagName('X')[0].textContent
                    var posy = cframe.getElementsByTagName('Y')[0].textContent
                    var posz = cframe.getElementsByTagName('Z')[0].textContent
                    var sizex = size.getElementsByTagName('X')[0].textContent
                    var sizey = size.getElementsByTagName('Y')[0].textContent
                    var sizez = size.getElementsByTagName('Z')[0].textContent
                    var R00 = cframe.getElementsByTagName('R00')[0].textContent
                    var R01 = cframe.getElementsByTagName('R01')[0].textContent
                    var R02 = cframe.getElementsByTagName('R02')[0].textContent
                    var R10 = cframe.getElementsByTagName('R10')[0].textContent
                    var R11 = cframe.getElementsByTagName('R11')[0].textContent
                    var R12 = cframe.getElementsByTagName('R12')[0].textContent
                    var R20 = cframe.getElementsByTagName('R20')[0].textContent
                    var R21 = cframe.getElementsByTagName('R21')[0].textContent
                    var R22 = cframe.getElementsByTagName('R22')[0].textContent
                    const box = new THREE.BoxGeometry(parseInt(sizex), parseInt(sizey), parseInt(sizez))
                    var matrix = new THREE.Matrix4(); // create once and reuse it
                    matrix.set(
                        R00,R01,R02,  posx,
                        R10,R11,R12,  posy,
                        R20,R21,R22,  posz,
                        0,   0,   0,  1
                    );

                    var myquat = new THREE.Quaternion()
                    myquat.setFromRotationMatrix(matrix)
                    box.applyQuaternion(myquat);

                    // outlinePass.selectedObjects = box;

                    var colorYe = 'rgba(200,200,200,1)'

                    if (color != null) {
                        colorYe = color3ToRgba(color.textContent)
                    }

                    if (color2 != null && color2 != '') {
                        console.log(color2.textContent)
                        colorYe = 'rgba(' + brickToRGB[color2.textContent] + ',1)'
                    }

                    console.log(colorYe)
                    var material = undefined

                    if (object.querySelector('[class="Decal"]') != null) {
                        var id = object.querySelector('[class="Decal"]').children[0].querySelector('[name="Texture"]').textContent.replace(/\D/g, '')
                        MakeRobloxRequest('/assetURL','POST', JSON.stringify({id: id}),true,function(is,res) {
                            var bodyYE = JSON.parse(res.responseText)
                            if (bodyYE.locations != undefined) {
                                var loader = new THREE.TextureLoader();
                                loader.load(bodyYE.locations[0].location, function ( texture ) {
                                    material = new THREE.MeshMatcapMaterial( { color: colorYe, map: texture } );
                                })
                            } else {
                                material = new THREE.MeshMatcapMaterial( { color: colorYe} );
                            }
                        })
                        while (true) {
                            if (material != undefined) {
                                break
                            }
                            await new Promise(r => setTimeout(r, 10));
                        }
                    } else {
                        material = new THREE.MeshMatcapMaterial( { color: colorYe} );
                    }
                    const mesh = new THREE.Mesh(box,material)
                    mesh.quaternion.setFromRotationMatrix( matrix );
                    //mesh.scale.set( parseInt(sizex), parseInt(sizey), parseInt(sizez) );
                    mesh.position.set(parseInt(posx), parseInt(posy), parseInt(posz))
                    
                    boxes[object.getAttribute('referent')] = [box,[parseInt(posx),parseInt(posy),parseInt(posz)],mesh,matrix]

                    ids[mesh.uuid] = object.getAttribute('referent')
                    scene.add(mesh)
                    
                    console.log(mesh)

                    /*
                    const dir = new THREE.Vector3( parseInt(posx),parseInt(posy),parseInt(posz) );

                    dir.normalize();

                    const origin = new THREE.Vector3(parseInt(posx),parseInt(posy),parseInt(posz));
                    const length = 4;
                    const hex = 0xffff00;

                    const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
                    scene.add( arrowHelper );
                    */
                
                    renderer.render(scene,camera)
                } catch {
                }
            }
        }
    }
}

function RefreshLive(liveItems) {
    console.log('ReRendering scene for live update')
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        obj = scene.children[i];
        scene.remove(obj); 
    }
    LoadWorkspaceItems(liveItems)
}

function RerenderScene() {
    console.log('ReRendering')
    for( var i = scene.children.length - 1; i >= 0; i--) { 
        obj = scene.children[i];
        scene.remove(obj); 
   }
   ShowWebGLItems()
}

var deleteFunction = undefined
var deleteHandler = undefined
var deleteType = undefined
var editor = undefined

async function loadProperties(obj,original) {
    allowchangeproperty = true
    var parent = document.getElementById('properties')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    parent.innerHTML = ''
    var loopthrough = obj.children
    for (amount = 0; amount < loopthrough.length; amount++) {
        var object = loopthrough[amount]
        var propertynew = document.createElement('div')
        propertynew.setAttribute('object',original.getAttribute('referent'))
        propertynew.setAttribute('value',object.getAttribute('name'))
        if (object.getAttribute('name') == 'Source') {
            propertynew.innerHTML = '≡ Edit Script ≡'
            propertynew.style.textAlign = 'center'
            propertynew.style.cursor = 'pointer'
            propertynew.style.fontWeight = 'bolder'
            propertynew.style.color = 'rgb(255,255,255)'
        } else {
            propertynew.style.color = 'rgb(0,0,0)'
            propertynew.style.cursor = "text"
            propertynew.innerHTML = '⠀' + object.getAttribute('name')
        }
        propertynew.style.border = ''
        if (object.getAttribute('name') === 'Name' && allowedclasses.indexOf(original.getAttribute('class')) !== -1 || limitedproperites.indexOf(object.getAttribute('name')) !== -1) {
            propertynew.style.backgroundImage = 'linear-gradient(rgba(100, 100, 100,.5),rgba(40, 40, 40,.5))';
        } else {
            if (object.getAttribute('name') != 'Source') {
                propertynew.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
            } else {
                propertynew.style.backgroundImage = 'linear-gradient(rgba(0, 164, 0,.5),rgba(0, 120, 0,.5))';
            }
            propertynew.onclick = async function(m) {
                if (m.target.getAttribute('object') == null) {
                    return;
                }
                var objectfound = xmlFormatted.querySelector("[referent=" + m.target.getAttribute('object') + "]")
                if (objectfound == null) {
                    return
                }
                var propertyfound = objectfound.querySelector("[name=" + m.target.getAttribute('value') + "]")
                if (propertyfound.getAttribute('name') == 'Source') {
                    document.getElementById('container').innerHTML = document.getElementById('container').innerHTML + '<div id="yeButton" style=" position: absolute; top: -45px; height: 40px; left: 20px; text-align: center; padding: 8px; box-shadow: black 0 -6px 6px -6px inset, grey 0 6px 6px -6px; border-radius: 5px; width: 100px; cursor: pointer; background-image: linear-gradient(0deg, gainsboro, rgba(220,220,220,0.2)); ">B A C K</div>'
                    document.getElementById('container').style =  'transition: all 1s linear; display: none; width: 100%; height: calc(100% - 50px); top: 0px; position: fixed; z-index: 99999999999999999;'
                    document.getElementById('container').style = 'transition: all 1s linear; transform: rotateX(90deg); opacity: 0; top: -100%;  width: 100%; height: calc(100% - 50px); position: fixed; z-index: 99999999999999999;  background-color: white;'
                    console.log(propertyfound.textContent)
                    editor = monaco.editor.create(document.getElementById('container'), {
                        value: propertyfound.textContent,
                        language: 'lua'
                    });
                    document.getElementById('yeButton').onclick = async function() {
                        document.getElementById('yeButton').remove()
                        document.getElementById('container').style.transform = 'rotateX(90deg)'
                        document.getElementById('container').style.opacity = '0'
                        document.getElementById('container').style.top = '-100%'
                        document.getElementById('allBeforeLoad').style = 'transition: 1s all linear; opacity: 0; position: absolute; width: 100%; height: 100%; top: -100%; transform: rotateX(-90deg);'
                        document.getElementById('allBeforeLoad').style = 'position: absolute; transition: 1s all linear; opacity: 1; top: 0px; width: 100%; height: 100%; transform: rotateX(0deg);'                
                        await new Promise(r => setTimeout(r, 1000));
                        var value = editor.getValue()
                        propertyfound.textContent  = value
                        editor.dispose()
                    }
                    document.getElementById('container').style.transform = 'rotateX(0deg)'
                    document.getElementById('container').style.opacity = '1'
                    document.getElementById('container').style.top = '50px'
                    document.getElementById('allBeforeLoad').style = 'position: fixed; transition: all 1s linear; opacity: 0; top: 100%; width: 100%; height: 100%; transform: rotateX(90deg);'
                    editor.focus()
                } else {
                    if (allowchangeproperty == false) {
                        if (deleteFunction != undefined) {
                            if (deleteType == true) {
                                await deleteFunction({
                                    value: deleteHandler.value,
                                    target: deleteHandler
                                })
                            } else {
                                await deleteFunction({
                                    target: deleteHandler
                                })
                            }
                        }
                    }
                    if (allowchangeproperty == true) {
                        var objectfound = xmlFormatted.querySelector("[referent=" + m.target.getAttribute('object') + "]")
                        if (objectfound == null) {
                            return
                        }
                        var propertyfound = objectfound.querySelector("[name=" + m.target.getAttribute('value') + "]")
                        if (propertyfound.children[0] != undefined) {
                            allowchangeproperty = false
                            var loopthrough2 = propertyfound.children
                            var text = document.createElement('div')
                            text.style.background = 'rgba(0,0,0,0)'
                            if (propertyfound.getElementsByTagName('R00').length > 0) {
                                text.style.height = '75px'
                                text.innerHTML = '<b>CFrames</b> here are edited differently than the ones in Roblox Studio<br>' + loopthrough2[0].tagName
                            } else {
                                text.style.height = '25px'
                                text.innerHTML = loopthrough2[0].tagName
                            }
                            text.style.width = '100%'
                            text.style.fontSize = '15px'
                            text.style.textAlign = 'center'
                            m.target.appendChild(text)
                            for (amount = 0; amount < loopthrough2.length; amount++) {
                                var object2 = loopthrough2[amount]
                                var newinput = document.createElement('input')
                                newinput.type = 'text'
                                newinput.setAttribute('prop',object2.tagName)
                                newinput.style.width = 'calc(100% - 12px)'
                                newinput.style.left = '6px'
                                newinput.style.position = 'relative'
                                newinput.style.backgroundImage = 'linear-gradient(rgba(0, 123, 255,0),rgba(0, 123, 255,0.1),rgba(0, 123, 255,0))'
                                newinput.style.boxShadow = '0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%)'
                                newinput.style.borderRadius = '10px'
                                newinput.style.border = 'none'
                                newinput.spellcheck = 'off'
                                newinput.autocapitalize = 'off'
                                newinput.autocomplete = 'off'
                                newinput.style.border = 'dotted 4px #007bff'
                                newinput.style.outline = 'none'
                                newinput.value = object2.innerHTML
                                m.target.appendChild(newinput)
                                if (amount == 0) {
                                    newinput.focus()
                                }
                                if (amount != (loopthrough2.length-1)) {
                                    var text2 = document.createElement('div')
                                    text2.style.background = 'rgba(0,0,0,0)'
                                    text2.innerHTML = loopthrough2[amount+1].tagName
                                    text2.style.width = '100%'
                                    text2.style.height = '25px'
                                    text2.style.fontSize = '15px'
                                    text2.style.textAlign = 'center'
                                    m.target.appendChild(text2)
                                }
                                /*
                                newinput.onblur = function(m2) {
                                    var value = m2.target.value
                                    m2.target.remove()
                                    propertyfound.textContent  = value
                                    allowchangeproperty = true
                                }
                                */
                            }
                            var text2 = document.createElement('div')
                            text2.style.background = 'rgba(0,0,0,0)'
                            text2.innerHTML = ""
                            text2.style.width = '100%'
                            text2.style.height = '25px'
                            text2.style.fontSize = '15px'
                            text2.style.textAlign = 'center'
                            m.target.appendChild(text2)
                            var button = document.createElement('button')
                            button.innerHTML = 'Close'
                            button.style.width = '100%'
                            button.style.height = '25px'
                            button.style.fontSize = '15px'
                            button.style.textAlign = 'center'
                            deleteType = false
                            deleteHandler = button
                            deleteFunction = async function(m2) {
                                var values = {}
                                
                                var parent = m2.target.parentElement
                                
                                while (parent.lastChild) {
                                    if (parent.lastChild.tagName != undefined) {
                                        if (parent.lastChild.getAttribute('prop') != null) {
                                            values[parent.lastChild.getAttribute('prop')] = parent.lastChild.value
                                        }
                                    }
                                    parent.removeChild(parent.lastChild);
                                    if (parent.children.length == 0) {
                                        break
                                    }
                                }
    
                                for (amount = 0; amount < loopthrough2.length; amount++) {
                                    var object2 = loopthrough2[amount]
                                    if (values[object2.tagName] != undefined) {
                                        object2.textContent = values[object2.tagName]    
                                    }
                                }
    
                                await new Promise(r => setTimeout(r, 10));
                                allowchangeproperty = true
                                if (renderSettings.includes(parent.getAttribute('value'))) {
                                    RerenderScene()
                                }
                            }
                            button.onclick = async function(m2) {
                                var values = {}
                                
                                var parent = m2.target.parentElement
                                
                                while (parent.lastChild) {
                                    if (parent.lastChild.tagName != undefined) {
                                        if (parent.lastChild.getAttribute('prop') != null) {
                                            values[parent.lastChild.getAttribute('prop')] = parent.lastChild.value
                                        }
                                    }
                                    parent.removeChild(parent.lastChild);
                                    if (parent.children.length == 0) {
                                        break
                                    }
                                }
    
                                for (amount = 0; amount < loopthrough2.length; amount++) {
                                    var object2 = loopthrough2[amount]
                                    if (values[object2.tagName] != undefined) {
                                        object2.textContent = values[object2.tagName]    
                                    }
                                }
    
                                await new Promise(r => setTimeout(r, 10));
                                allowchangeproperty = true
                                if (renderSettings.includes(parent.getAttribute('value'))) {
                                    RerenderScene()
                                }
                            }
                            m.target.appendChild(button)
                        } else {
                            var newinput = document.createElement('input')
                            allowchangeproperty = false
                            newinput.type = 'text'
                            newinput.style.width = 'calc(100% - 12px)'
                            newinput.style.left = '6px'
                            newinput.style.position = 'relative'
                            newinput.style.backgroundImage = 'linear-gradient(rgba(0, 123, 255,0),rgba(0, 123, 255,0.1),rgba(0, 123, 255,0))'
                            newinput.style.boxShadow = '0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 1px 5px 0px rgb(0 0 0 / 20%)'
                            newinput.style.borderRadius = '10px'
                            newinput.style.border = 'none'
                            newinput.spellcheck = 'off'
                            newinput.autocapitalize = 'off'
                            newinput.autocomplete = 'off'
                            newinput.style.border = 'dotted 4px #007bff'
                            newinput.style.outline = 'none'
                            newinput.value = propertyfound.textContent
                            m.target.appendChild(newinput)
                            newinput.focus()
                            deleteHandler = newinput
                            deleteType = true
                            deleteFunction = async function(m2) {
                                var value = m2.target.value
                                var parent = m2.target.parentElement
                                m2.target.remove()
                                propertyfound.textContent  = value
                                allowchangeproperty = true
                                if (renderSettings.includes(parent.getAttribute('value'))) {
                                    RerenderScene()
                                }
                            }
                            newinput.onblur = function(m2) {
                                var value = m2.target.value
                                var parent = m2.target.parentElement
                                m2.target.remove()
                                propertyfound.textContent  = value
                                allowchangeproperty = true
                                if (renderSettings.includes(parent.getAttribute('value'))) {
                                    RerenderScene()
                                }
                            }
                        }
                    }
                }
            }
        }
        parent.appendChild(propertynew)
    }
}

const fitCameraToObject = function ( camera, object, offset, controls ) {
    offset = offset || 1.25;

    const boundingBox = new THREE.Box3();

    // get bounding box of object - this will be used to setup controls and camera
    boundingBox.setFromObject( object );

    const center = boundingBox.getCenter();

    const size = boundingBox.getSize();

    // get the max side of the bounding box (fits to width OR height as needed )
    const maxDim = Math.max( size.x, size.y, size.z );
    const fov = camera.fov * ( Math.PI / 180 );
    let cameraZ = Math.abs( maxDim / 4 * Math.tan( fov * 2 ) );

    cameraZ *= offset; // zoom out a little so that objects don't fill the screen

    camera.position.z = cameraZ;

    const minZ = boundingBox.min.z;
    const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

    camera.far = cameraToFarEdge * 3;
    camera.updateProjectionMatrix();

    if ( controls ) {

      // set camera to rotate around center of loaded object
      controls.target = center;

      // prevent camera from zooming out far enough to create far plane cutoff
      controls.maxDistance = cameraToFarEdge * 2;

      controls.saveState();

    } else {

        camera.lookAt( center )

   }
}
async function clickYE(m,parent,objectfound2,node) {
    var objectfound = xmlFormatted.querySelector("[referent=" + m.target.getAttribute('object') + "]")
    if (objectfound == null) {
        var ogM = m
        m = {
            target: ogM.target.parentElement.parentElement
        }
        objectfound = xmlFormatted.querySelector("[referent=" + m.target.getAttribute('object') + "]")
    }
    var objectchildren = objectfound.children
    var reference = m.target.nextElementSibling
    var beforeYEEEE = 'm'
    if (currentSelection != '') {
        beforeYEEEE = currentSelection.style.backgroundImage
        currentSelection.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
        currentSelection.style.color = 'rgb(0,0,0)'
        currentSelection.style.border = ''
        if (currentOutline != undefined) {
            scene.remove(currentOutline[0])
            console.log(currentOutline)
            currentOutline[1].material.color.setStyle(currentOutline[2])
            currentOutline = undefined
        }
        currentSelection.style.height = '30px'
    }
    console.log(beforeYEEEE)
    if (m.target != currentSelection || beforeYEEEE != 'linear-gradient(rgba(22, 169, 243, 0.5), rgba(40, 108, 148, 0.5))' || objectfound.children[1] != undefined) {
        m.target.style.backgroundImage = 'linear-gradient(rgba(22, 169, 243,.5),rgba(40, 108, 148,.5))';
        m.target.style.color = 'rgb(255,255,255)'
        m.target.style.border = '2px solid rgb(42, 189, 273)'
        m.target.style.height = '34px'
        if (boxes[m.target.getAttribute('object')] != undefined) {
            var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: '#007bff',wireframe : true } );
            var outlineMesh1 = new THREE.Mesh( boxes[m.target.getAttribute('object')][0], outlineMaterial1 );
            outlineMesh1.quaternion.setFromRotationMatrix( boxes[m.target.getAttribute('object')][3] );
            outlineMesh1.position.set(boxes[m.target.getAttribute('object')][1][0],boxes[m.target.getAttribute('object')][1][1],boxes[m.target.getAttribute('object')][1][2])
            scene.add( outlineMesh1 );
            currentOutline = [outlineMesh1,boxes[m.target.getAttribute('object')][2],boxes[m.target.getAttribute('object')][2].material.color.getStyle()]
            boxes[m.target.getAttribute('object')][2].material.color.setStyle('rgb(11, 93, 181)')
            renderer.render(scene,camera)
        }
        currentSelection = m.target
        var isopen = m.target.getAttribute('isopen')
        if (isopen == undefined) {
            loadProperties(objectfound.children[0],objectfound)
            if (objectfound.children[1] != undefined) {
                m.target.innerHTML = "⠀⠀" + m.target.getAttribute('original') + ' ▲'
                GetIconFromName(objectfound2.getAttribute('class'),node)
                m.target.setAttribute('isopen','yes')
                childtable[m.target.getAttribute('object')] = {}
                for (amount2 = 0; amount2 < objectchildren.length; amount2++) {
                    if (amount2 != 0) {
                        var newobject = objectchildren[amount2]
                        var properties = newobject.children[0]
                        if (properties != undefined) {
                            var property = properties.querySelector('[name="Name"]')
                            var thingnew = document.createElement('div')
                            childtable[m.target.getAttribute('object')][newobject.getAttribute('referent')] = 'yes'
                            thingnew.style.color = 'rgb(0,0,0)'
                            thingnew.setAttribute('object',newobject.getAttribute('referent'))
                            thingnew.setAttribute('original',property.textContent)
                            thingnew.innerHTML = "⠀⠀" + property.textContent
                            GetIconFromName(newobject.getAttribute('class'),thingnew)
                            thingnew.style.cursor = "pointer"
                            thingnew.style.height = '30px'
                            thingnew.style.fontSize = '20px'
                            thingnew.oncontextmenu = async function(m) {
                                console.log('ye')
                                if (document.getElementById('chooser')) {
                                    document.getElementById('chooser').remove()
                                }
                                var element = `<div class="popove fade bottom in" role="tooltip" id="chooser" style="text-size-adjust: 100%;-webkit-tap-highlight-color: transparent; --blue: #007bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc3545; --orange: #fd7e14; --yellow: #ffc107; --green: #28a745; --teal: #20c997; --cyan: #17a2b8; --white: #fff; --gray: #6c757d; --gray-dark: #343a40; --primary: #007bff; --secondary: #6c757d; --success: #28a745; --info: #17a2b8; --warning: #ffc107; --danger: #dc3545; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,&quot;Liberation Mono&quot;,&quot;Courier New&quot;,monospace;font-weight: 400;box-sizing: border-box;font-family: &quot;Source Sans Pro&quot;, Arial, Helvetica, sans-serif;color: rgb(52, 52, 52);font-size: 14px;line-height: 1.428;margin: 6px 0px 0px;background-color: rgb(255, 255, 255);box-shadow: rgba(25, 25, 25, 0.3) 0px 1px 4px 0px;background-clip: padding-box;border-radius: 4px;border: 0px;max-width: 276px;text-align: left;padding: 0px;position: absolute;white-space: normal;z-index: 1060;opacity: 0;transition: opacity 0.15s linear 0s;top: ${m.clientY}px;left: ${m.clientX}px;display: block;"> <div style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; font-size: 14px; line-height: 1.428; text-align: left; white-space: normal; margin: 0; border: none; padding: 0;" class="popove-content"> <ul id="currentYes" style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; line-height: 1.428; white-space: normal; background-color: #fff; border-radius: 4px; background-clip: padding-box; box-shadow: 0 -5px 20px rgba(25,25,25,.15); float: left; font-size: 16px; margin: 0; padding: 0; min-width: 105px; overflow-y: auto; overflow-x: hidden; width: 100%; top: 100%; left: 0; list-style: none; text-align: left; z-index: 1020; display: block; position: relative; border: 0;">  </ul> </div> </div>`
                                document.body.insertAdjacentHTML( 'beforeend', element );
                                var elementYE = `<li style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; line-height: 1.428; font-size: 16px; border: none; list-style: none; margin: 0; white-space: nowrap; padding: 0 6px; width: auto;" id="logout"> <a style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; font-size: 16px; list-style: none; margin: 0; border: none; transition: none; text-decoration: none; clear: both; line-height: 1.42857; padding: 10px 6px; white-space: nowrap; display: block; color: #191919; font-weight: 400;">[replace me ooga booga ooga he he he haw]</a> </li>`
                                await new Promise(r => setTimeout(r, 10));
                                var arrayYes = ['Delete','Clone','Cut','Copy','Paste']
                                arrayYes.forEach(function(test) {
                                    var elementYE2 = elementYE.replace('[replace me ooga booga ooga he he he haw]',test)
                                    document.getElementById('currentYes') .insertAdjacentHTML( 'beforeend', elementYE2 );
                                })
                                await new Promise(r => setTimeout(r, 10));
                                document.getElementById('chooser').style.opacity = '1'
                            }
                            thingnew.style.userSelect = 'none'
                            thingnew.onmouseenter = async function(m) {
                                m.target.setAttribute('leave','nah')
                                while (true) {
                                    if (m.target.getAttribute('leave') == 'ye') {
                                        break
                                    } else {
                                        if (m.target.innerHTML.includes('<span')) {
                                        } else {
                                            m.target.innerHTML = m.target.innerHTML.split('<div')[0] + '  <span style="color:#007bff;font-weight:bolder;">⊕</span> <div' + m.target.innerHTML.split('<div')[1]
                                        }
                                        await new Promise(r => setTimeout(r, 10));
                                    }
                                }
                            }
                            thingnew.onmouseleave = async function(m) {
                                m.target.setAttribute('leave','ye')
                                if (m.target.innerHTML.includes('<span')) {
                                    m.target.innerHTML = m.target.innerHTML.split('  <span')[0] + m.target.innerHTML.split('</span> ')[1]
                                }
                                while (true) {
                                    if (m.target.getAttribute('leave') == 'nah') {
                                        break
                                    } else {
                                        if (m.target.innerHTML.includes('<span')) {
                                            m.target.innerHTML = m.target.innerHTML.split('  <span')[0] + m.target.innerHTML.split('</span> ')[1]
                                        }
                                        await new Promise(r => setTimeout(r, 10));
                                    }
                                }
                            }
                            thingnew.style.border = ''
                            thingnew.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
                            var attribute = m.target.getAttribute('amount')
                            if (attribute != undefined) {
                                thingnew.style.marginLeft = (8 * (parseInt(m.target.getAttribute('amount')) + 1))
                                thingnew.setAttribute('amount',parseInt(m.target.getAttribute('amount')) + 1)
                            } else {
                                thingnew.style.marginLeft = (8)
                                thingnew.setAttribute('amount',1)
                            }
                            insertAfter(reference,thingnew)
                            onclickfunction(thingnew)
                        }
                    }
                }
            }
        } else {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            parent.innerHTML = '⠀(no object selected)'
            node.innerHTML = "⠀⠀" + node.getAttribute('original') + ' ▼'
            GetIconFromName(objectfound2.getAttribute('class'),node)
            m.target.removeAttribute('isopen')
            clearObjectChildren(m.target)
            m.target.style.height = '30px'
            m.target.style.userSelect = 'none'
            if (currentOutline != undefined) {
                scene.remove(currentOutline[0])
                console.log(currentOutline)
                currentOutline[1].material.color.setStyle(currentOutline[2])
                currentOutline = undefined
            }
            m.target.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
            m.target.style.color = 'rgb(0,0,0)'
            m.target.style.border = ''
            currentSelection = ''
        }
    }
}

async function onclickfunction(node) {
    var parent = document.getElementById('properties')
    var objectfound2 = xmlFormatted.querySelector("[referent=" + node.getAttribute('object') + "]")
    if (objectfound2.children[1] != undefined) {
        node.innerHTML = "⠀⠀" + node.getAttribute('original') + ' ▼'
        GetIconFromName(objectfound2.getAttribute('class'),node)
    }
    node.onclick = function (m) {
        if (m.target.tagName != 'SPAN') {
            clickYE(m,parent,objectfound2,node)
        } else {
            loadCreateMenu(m.target.parentElement.getAttribute('object'))
        }
    }
}
var moveCamera = function() {
    requestAnimationFrame(moveCamera)
    var distance = 1

    if (currentmovement.split('+')[1] == 'shift') {
        distance = 3
    } else {
        if (currentmovement.split('+')[1] == 'control') {
            distance = 0.25
        } else {
            if (currentmovement.split('+')[2] == 'shift') {
                distance = 3
            } else {
                if (currentmovement.split('+')[2] == 'control') {
                    distance = 0.25
                }
            }
        }
    }

    if (currentmovement == 'w' || currentmovement.split('+')[0] == 'w' || currentmovement.split('+')[1] == 'w') {
        camera.translateZ( - distance );
    }
    if (currentmovement == 's' || currentmovement.split('+')[0] == 's' || currentmovement.split('+')[1] == 's') {
        camera.translateZ( + distance );
    }
    if (currentmovement == 'd' || currentmovement.split('+')[0] == 'd' || currentmovement.split('+')[1] == 'd') {
        camera.translateX( + distance );
    }
    if (currentmovement == 'a' || currentmovement.split('+')[0] == 'a' || currentmovement.split('+')[1] == 'a') {
        camera.translateX( - distance );
    }
    if (currentmovement == ' ' || currentmovement == 'e' || currentmovement.split('+')[0] == 'e' || currentmovement.split('+')[0] == ' ' || currentmovement.split('+')[1] == ' ' || currentmovement.split('+')[1] == 'e') {
        camera.translateY( + distance );
    }
    if (currentmovement == 'q' || currentmovement.split('+')[0] == 'q' || currentmovement.split('+')[1] == 'q') {
        camera.translateY( - distance );
    }

    renderer.render(scene,camera)
}

document.onkeydown = function (event) {
    console.log(currentmovement)
    if (event.key.toLowerCase() == 'shift' && currentmovement.includes('shift') == false || event.key.toLowerCase() == 'control' && currentmovement.includes('control') == false) {
        if (currentmovement != '') {
            currentmovement = currentmovement + '+' + event.key.toLowerCase()
        }
    } else {
        if (event.key.toLowerCase() != 'shift' && event.key.toLowerCase() != 'control') {
            if (currentmovement.includes('shift') == false && currentmovement.includes('control') == false) {
                if (currentmovement == 'w' && event.key.toLowerCase() == 'a') {
                    currentmovement = 'w' + '+' + 'a'
                } else {
                    if (currentmovement == 'w' && event.key.toLowerCase() == 'd') {
                        currentmovement = 'w' + '+' + 'd'
                    } else {
                        if (currentmovement == 's' && event.key.toLowerCase() == 'a') {
                            currentmovement = 's' + '+' + 'a'
                        } else {
                            if (currentmovement == 's' && event.key.toLowerCase() == 'd') {
                                currentmovement = 's' + '+' + 'd'
                            } else {
                                if (currentmovement == 'd' && event.key.toLowerCase() == 's') {
                                    currentmovement = 'd' + '+' + 's'
                                } else {
                                    if (currentmovement == 'd' && event.key.toLowerCase() == 'w') {
                                        currentmovement = 'd' + '+' + 'w'
                                    } else {
                                        if (currentmovement == 'a' && event.key.toLowerCase() == 's') {
                                            currentmovement = 'a' + '+' + 's'
                                        } else {
                                            if (currentmovement == 'a' && event.key.toLowerCase() == 'w') {
                                                currentmovement = 'a' + '+' + 's'
                                            } else {
                                                if (currentmovement == 'e' && event.key.toLowerCase() == 's') {
                                                    currentmovement = 'e' + '+' + 's'
                                                } else {
                                                    if (currentmovement == 'e' && event.key.toLowerCase() == 'w') {
                                                        currentmovement = 'e' + '+' + 'w'
                                                    } else {
                                                        if (currentmovement == 'q' && event.key.toLowerCase() == 's') {
                                                            currentmovement = 'q' + '+' + 's'
                                                        } else {
                                                            if (currentmovement == 'q' && event.key.toLowerCase() == 'w') {
                                                                currentmovement = 'q' + '+' + 'w'
                                                            } else {
                                                                if (currentmovement == 'e' && event.key.toLowerCase() == 'a') {
                                                                    currentmovement = 'e' + '+' + 'a'
                                                                } else {
                                                                    if (currentmovement == 'e' && event.key.toLowerCase() == 'd') {
                                                                        currentmovement = 'e' + '+' + 'd'
                                                                    } else {
                                                                        if (currentmovement == 'q' && event.key.toLowerCase() == 'a') {
                                                                            currentmovement = 'q' + '+' + 'a'
                                                                        } else {
                                                                            if (currentmovement == 'q' && event.key.toLowerCase() == 'd') {
                                                                                currentmovement = 'q' + '+' + 'd'
                                                                            } else {
                                                                                if (currentmovement.includes('+') == false) {
                                                                                    currentmovement = event.key.toLowerCase()
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (currentmovement.includes('+') == false) {
                    currentmovement = event.key.toLowerCase() + '+' + currentmovement
                }
            }
        }
    }
}

document.onmouseup = function(event) {
    buttondown = false
}

document.onkeyup = function (event) {
    if (currentmovement.includes('+shift') || currentmovement.includes('+control')) {
        currentmovement = currentmovement.split('+')[0]
    } else {
        currentmovement = ''
    }
}

async function loadExplorer() { 
    var file = ''
    var file2 = ''
    var placeSource = ''
    const cookies = new URLSearchParams(document.cookie.replaceAll('; ', '&'));
    if (cookies.get('dataYE') != undefined) {
        MakeRobloxRequest('/downloadasset','POST', JSON.stringify({id: cookies.get('dataYE').split('|')[0]}),true,async function(is,res) {
            var smallerSource = res.responseText.slice(0, 14)
            console.log(smallerSource)
            if (smallerSource == "<roblox xmlns:") {
                file = res.responseText
            } else {
                await new Promise(r => setTimeout(r, 800));
                document.getElementById('convertText').innerHTML = 'Converting binary to xml...<br> <b><a href="https://www.matthewdean.com/roblox-file-converter">https://www.matthewdean.com/roblox-file-converter</a></b>'
                MakeRobloxRequest('/assetURL','POST', JSON.stringify({id: cookies.get('dataYE').split('|')[0]}),true,function(is,res) {
                    var bodyYE = JSON.parse(res.responseText)
                    if (bodyYE.locations != undefined) {
                        var url = bodyYE.locations[0].location
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", url);
                        xhr.responseType = "arraybuffer";
                        xhr.onload = async function() {
                            if (this.status == 200) {
                                var textDecoder = new TextDecoder()
                                var decoded = textDecoder.decode(xhr.response)
                                if (decoded.slice(0, 14) == "<roblox xmlns:") {
                                    file = decoded
                                    return
                                }
                                var thing = handleArrayBuffer(xhr.response);
                                if (thing != false) {
                                    document.getElementById('convertText').innerHTML = 'Converted; loading explorer...<br> <b><a href="https://www.matthewdean.com/roblox-file-converter">https://www.matthewdean.com/roblox-file-converter</a></b>'
                                    file = thing.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '')
                                } else {
                                    var thingYE = document.getElementsByClassName('spinner-border text-primary')[0]
                                    thingYE.className = ''
                                    thingYE.style.transition = '0.25s all linear'
                                    thingYE.style.textAlign = 'center'
                                    thingYE.style.color = 'red'
                                    thingYE.style.borderRightColor = 'red'
                                    await new Promise(r => setTimeout(r, 350));
                                    thingYE.style.animation = '.1s linear forwards size2 1.25s'
                                    document.getElementById('convertText').innerHTML = 'Conversion failed<br> <b><a href="https://www.matthewdean.com/roblox-file-converter">https://www.matthewdean.com/roblox-file-converter</a></b>'
                                    thingYE.innerHTML = `
                                    <span style="
                                    font-size: 35px;
                                    ">!</span>`
                                }
                            }
                        };
                        xhr.send();
                    }
                })
            }
        })
        while (true) {
            if (file.length > 0) {
                break
            }
            await new Promise(r => setTimeout(r, 10));
        }
    } else {
        await fetch('/getfile')
            .then(response => response.text()) 
            .then(textString => {
                file = textString
            });
    }
    await fetch('/getfile2')
        .then(response => response.text()) 
        .then(textString => {
            file2 = textString
        });
    xmlFormatted = readXml(file)
    xmlFormatted2 = readXml(file2)
    document.body.onclick = function() {
        if (document.getElementById('chooser')) {
            document.getElementById('chooser').remove()
        }
    }
    logAll()
    mainObject = xmlFormatted.getElementsByTagName('roblox')[0]
    var loopthrough = mainObject.children
    for (amount = 0; amount < loopthrough.length; amount++) {
        var object = loopthrough[amount]
        if (allowedclasses.indexOf(object.getAttribute('class')) !== -1) {
            if (object.tagName.includes('Item') == true) {
                var properties = object.children[0]
                var property = properties.querySelector('[name="Name"]')
                var thing = document.createElement('div')
                thing.setAttribute('object',object.getAttribute('referent'))
                thing.setAttribute('original',property.textContent)
                thing.style.backgroundImage = 'linear-gradient(rgba(244, 244, 244,.5),rgba(200, 200, 200,.5))';
                thing.style.cursor = "pointer"
                thing.style.height = '30px'
                thing.style.userSelect = 'none'
                thing.oncontextmenu = async function(m) {
                    console.log('ye')
                    if (document.getElementById('chooser')) {
                        document.getElementById('chooser').remove()
                    }
                    var element = `<div class="popove fade bottom in" role="tooltip" id="chooser" style="text-size-adjust: 100%;-webkit-tap-highlight-color: transparent; --blue: #007bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc3545; --orange: #fd7e14; --yellow: #ffc107; --green: #28a745; --teal: #20c997; --cyan: #17a2b8; --white: #fff; --gray: #6c757d; --gray-dark: #343a40; --primary: #007bff; --secondary: #6c757d; --success: #28a745; --info: #17a2b8; --warning: #ffc107; --danger: #dc3545; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,&quot;Liberation Mono&quot;,&quot;Courier New&quot;,monospace;font-weight: 400;box-sizing: border-box;font-family: &quot;Source Sans Pro&quot;, Arial, Helvetica, sans-serif;color: rgb(52, 52, 52);font-size: 14px;line-height: 1.428;margin: 6px 0px 0px;background-color: rgb(255, 255, 255);box-shadow: rgba(25, 25, 25, 0.3) 0px 1px 4px 0px;background-clip: padding-box;border-radius: 4px;border: 0px;max-width: 276px;text-align: left;padding: 0px;position: absolute;white-space: normal;z-index: 1060;opacity: 0;transition: opacity 0.15s linear 0s;top: ${m.clientY}px;left: ${m.clientX}px;display: block;"> <div style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; font-size: 14px; line-height: 1.428; text-align: left; white-space: normal; margin: 0; border: none; padding: 0;" class="popove-content"> <ul id="currentYes" style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; line-height: 1.428; white-space: normal; background-color: #fff; border-radius: 4px; background-clip: padding-box; box-shadow: 0 -5px 20px rgba(25,25,25,.15); float: left; font-size: 16px; margin: 0; padding: 0; min-width: 105px; overflow-y: auto; overflow-x: hidden; width: 100%; top: 100%; left: 0; list-style: none; text-align: left; z-index: 1020; display: block; position: relative; border: 0;">  </ul> </div> </div>`
                    document.body.insertAdjacentHTML( 'beforeend', element );
                    var elementYE = `<li style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; color: #343434; line-height: 1.428; font-size: 16px; border: none; list-style: none; margin: 0; white-space: nowrap; padding: 0 6px; width: auto;" id="logout"> <a style="    font-family: 'Source Sans Pro',Arial,Helvetica,sans-serif; font-size: 16px; list-style: none; margin: 0; border: none; transition: none; text-decoration: none; clear: both; line-height: 1.42857; padding: 10px 6px; white-space: nowrap; display: block; color: #191919; font-weight: 400;">[replace me ooga booga ooga he he he haw]</a> </li>`
                    await new Promise(r => setTimeout(r, 10));
                    var arrayYes = ['Delete','Clone','Cut','Copy','Paste']
                    arrayYes.forEach(function(test) {
                        var elementYE2 = elementYE.replace('[replace me ooga booga ooga he he he haw]',test)
                        document.getElementById('currentYes') .insertAdjacentHTML( 'beforeend', elementYE2 );
                    })
                    await new Promise(r => setTimeout(r, 10));
                    document.getElementById('chooser').style.opacity = '1'
                }
                thing.style.fontSize = '20px'
                thing.style.color = 'rgb(0,0,0)'
                thing.onmouseenter = async function(m) {
                    m.target.setAttribute('leave','nah')
                    while (true) {
                        if (m.target.getAttribute('leave') == 'ye') {
                            break
                        } else {
                            if (m.target.innerHTML.includes('<span')) {
                            } else {
                                m.target.innerHTML = m.target.innerHTML.split('<div')[0] + '  <span style="color:#007bff;font-weight:bolder;">⊕</span> <div' + m.target.innerHTML.split('<div')[1]
                            }
                            await new Promise(r => setTimeout(r, 10));
                        }
                    }
                }
                thing.onmouseleave = async function(m) {
                    m.target.setAttribute('leave','ye')
                    if (m.target.innerHTML.includes('<span')) {
                        m.target.innerHTML = m.target.innerHTML.split('  <span')[0] + m.target.innerHTML.split('</span> ')[1]
                    }
                    while (true) {
                        if (m.target.getAttribute('leave') == 'nah') {
                            break
                        } else {
                            if (m.target.innerHTML.includes('<span')) {
                                m.target.innerHTML = m.target.innerHTML.split('  <span')[0] + m.target.innerHTML.split('</span> ')[1]
                            }
                            await new Promise(r => setTimeout(r, 10));
                        }
                    }
                }
                thing.innerHTML = "⠀⠀" + property.textContent
                GetIconFromName(object.getAttribute('class'),thing)
                document.getElementById('explorerdiv').appendChild(thing)
                onclickfunction(thing)
            }
        }
    }
    convertToXML()
    await initWebGL()
    await ShowWebGLItems()
    moveCamera()
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2()
    renderer.domElement.onclick = function(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObject(scene, true);
        if (intersects.length > 0) {
            var object = intersects[0].object;
            var ye = ids[object.uuid]
            SelectElementByRef(ye)
        }
        renderer.render(scene,camera) 
    }
    document.getElementById('allBeforeLoad').style = 'transition: 1s all linear; opacity: 0; position: absolute; width: 100%; height: 100%; top: -100%; transform: rotateX(-90deg);'
    await new Promise(r => setTimeout(r, 1000));
    const controls = new THREE.OrbitControls(camera, renderer.domElement)
    document.getElementById('container').style.display = 'none'
    document.getElementById('allBeforeLoad').style = 'position: absolute; transition: 1s all linear; opacity: 1; top: 0px; width: 100%; height: 100%; transform: rotateX(0deg);'
    document.getElementById('thingYEet').style = document.getElementById('thingYEet').getAttribute('style') + ' opacity: 0; top: 100%; transform: rotateX(90deg);'
}

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to exit?";
});