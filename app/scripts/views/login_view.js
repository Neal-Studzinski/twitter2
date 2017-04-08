

export default function loginView(store) {
    // Create html
    let html = $(`
        <div>
            <h1 id="header">HI THERE!</h1>
            <form id="login-form">
                <input id="username" />
                <input id="password" type="password"/>
                <button id="submit">login</button>
            </form>
            <button id="matt">Matt's Button</button>
            <div id="output"></div>
        </div>`)

    //Add event listeners
    let loginForm = html.find('#login-form');
    let output = html.find('#output');
    let mattsButton = html.find('#matt')
    let header = html.find('#header')

    loginForm.on("submit", function(e) {
        e.preventDefault();
        let username = html.find('#username').val();
        output.append(`<p>${username}</p>`);
    });

    mattsButton.on('click', function() {
        // .html()   -- replaces
        // .append() -- adds to
        mattsButton.html("Neal's Button");
    })

    header.on('click', function() {
        header.append('YAY')
    })


    //retrun html
    return html
}
