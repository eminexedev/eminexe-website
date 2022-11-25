const lanyard = new WebSocket("wss://api.lanyard.rest/socket");


var statusIcon = document.getElementById("statusIcon");
var statusContent = document.getElementById("statusContent");
var spotfystat = document.getElementById("spotfystatus");

var api = {};
var received = false;

lanyard.onopen = function() {
    lanyard.send(
        JSON.stringify({
            op: 2,
            d: {
                subscribe_to_id: "685560149381087248",
            },
        })
    );
};

setInterval(() => {
    if (received) {
        lanyard.send(
            JSON.stringify({
                op: 3,
            })
        );
    }
}, 30000);

lanyard.onmessage = function(event) {
    received = true;
    api = JSON.parse(event.data);

    if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
        update_presence();
    }
};


function update_presence() {
    if (statusIcon != null) {
        update_status(api.d.discord_status);
    }

    if (api.d.discord_status === "dnd") {
        statusContent.innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1 mr-2"></span>Do not Disturb - on discord status`;

    } else if (api.d.discord_status === "idle") {
        statusContent.innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1 mr-2"></span>Idle - on discord status`;

    } else if (api.d.discord_status === "online") {
        statusContent.innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1 mr-2"></span>Online - on discord status`;

    } else if (api.d.discord_status === "offline") {
        statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-2"></span>Offline - on discord status `;

    } else {
        statusContent.innerHTML = `<div class="animate-pulse"><span class="stat-text w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-2"></span>Loading.....</span> </div>`;

    }

    if (api.d.listening_to_spotify === true) {
        spotfystat.innerHTML = `<span> <p> <i class="fa-brands fa-spotify"></i> Listening to Spotify </p>  <p> ${api.d.spotify.song} </p><p> ${api.d.spotify.artist} </p></span>`;
    } else {
        spotfystat.innerHTML = `<span><p> <i class="fa-brands fa-spotify"></i> I don't listen to Spotify.</p></span> `;
    }




}