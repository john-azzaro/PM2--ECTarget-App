"use strict";

function clickEm() {
    $("ul, li").on('click', function(event) {
        event.stopPropagation();
        $("h4").text("the element the user selected is: " + $(event.currentTarget).text());
    });
}

function generateStartHtml() {
    return `
    <h3>Welcome to the Original event.CurrentTarget App!</h3>
    <p>In this app, you'll see information about which DOM element the user has interacted with.</p>
    <button id="startapp">Click to Start!</button>        
    `
}

function generateAppHtml() {
return `
    <h3>The Orginal event.currentTarget App (TM)</h3>
    <h4>what element did the user click?</h4>

    <div>
        <ul>
            <li>fee</li>
            <li>fie</li>
            <li>foe</li>
            <li>fum</li>
        </ul>
    </div>

    <button id="goback">Go Back</button>
    <button id="reset">Reset</button>
`
}

function renderStartHtml() {
    $('main').html(generateStartHtml);
}

function renderAppHtml() {
    $('main').html(generateAppHtml);
    $(clickEm);
}

function handleClickStart() {
    $('main').on('click', '#startapp', function(event) {
        renderAppHtml();
    });
}

function handleGoBack() {
    $('main').on('click', '#goback', function(event) {
        renderStartHtml();
    });
}

function handleReset() {
    $('main').on('click', '#reset', function(event) {
        renderAppHtml();
    });
}

function setupEventHandlers() {
    handleClickStart();
    handleGoBack();
    handleReset();
}

function initializeApp() {
    setupEventHandlers();
    renderStartHtml();
}

$(initializeApp);


















/*
//// orginal model from notes //////////////////////////////////////////////////
$(function() {
    $("ul, li").click(function(event) {
        event.stopPropagation();
        $("h4").text("the element the user selected is: " + $(event.currentTarget).text());
    });
})


//// modified model with updated parameters ////////////////////////////////////
$(function() {
    $("ul, li").on('click', function(event) {
        event.stopPropagation();
        $("h4").text("the element the user selected is: " + $(event.currentTarget).text());
    });
})


//// conversion to function with jquery callback ////////////////////////////////
function clickEm() {
    $("ul, li").on('click', function(event) {
        event.stopPropagation();
        $("h4").text("the element the user selected is: " + $(event.currentTarget).text());
    });
}
$(clickEm);


*/