async  function createPasswordChangeWindow() {
    var button = document.getElementById('changePasswordButton');
    var windowId = "passwordChangeWindow";
    var oldWindow = document.getElementById(windowId)
    if(oldWindow){
        oldWindow.remove();
    }
    await createPasswordChangeContent(createWindow(button, windowId, "Zmiana Hasła", 400, 50, 400, 250));
}

async function createProfileWindow() {
    var button = document.getElementById('profileButton');
    var windowId = "profileWindow";
    await createProfileContent(createWindow(button, windowId, "Profil", 50, 50, 400, 300));
    document.getElementById('changePasswordButton').addEventListener('click', createPasswordChangeWindow);
}

async function createMessagesWindow() {
    var button = document.getElementById('messagesButton');
    var windowId = "messagesWindow";
    await createMessagesContent(createWindow(button, windowId, "Wiadomości", 50, 500, 400, 300));
    document.getElementById('changePasswordButton').addEventListener('click', createPasswordChangeWindow);
}

document.getElementById('profileButton').addEventListener('click', createProfileWindow);
document.getElementById('messagesButton').addEventListener('click', createMessagesWindow);