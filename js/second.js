const countDownBox = document.querySelector(".countdown")
const countDownDays = document.getElementById("days");
const countDownHours = document.getElementById("hours");
const countDownMinutes = document.getElementById("minutes");
const countDownSeconds = document.getElementById("seconds");


// create the countdown end date
const endDate = new Date("2025-01-31T00:00:00Z").getTime();

// function to update the countdown
function updateCountdown() {
    // get the current time now
    const now = new Date().getTime();

    // calculate the time left
    const timeLeft = endDate - now;

    // calculate the days left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // calculate the hours left
    const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // calculate the minutes left
    const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    // calculate the seconds left
    const seconds = Math.floor(timeLeft % (1000 * 60) / (1000));

    // pass the stored value of days. hours, minutes & seconds to their respective elements
    countDownDays.innerHTML = `${days} `
    countDownHours.innerHTML = `${hours.toString().padStart(2, "0")}`

    countDownMinutes.innerHTML = `${minutes.toString().padStart(2, "0")}`

    countDownSeconds.innerHTML = `${seconds.toString().padStart(2, "0")}`


    // if countdown has endded
    if (timeLeft <= 0) {
        // clare  any existing interval
        clearInterval(countdownInterval);
        countDownBox.innerHTML = "count down has endded"
    }

};
// Running the updatecountdown function every second using setinterval
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


const review = [{
    id: 1,
    reviewHead: "Roland Smith",
    likes: 5,
        img: "./assect/second/avatar_placeholder (1).png",
    text:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
},
{
    id: 2,
    reviewHead: "Nmesoma Belonwu",
    likes: 1,
        img: "./assect/second/avatar_placeholder (2).png",

    text:
        "I bought it 2 weeks ago and now come back just to say not what i ordered.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
},
{
    id: 3,
    reviewHead: "Onyekachi",
    likes: 2,
        img: "./assect/second/avatar_placeholder (3).png",
    text:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
},
{
    id: 4,
    reviewHead: "Chisom",
    likes: 3,
        img: "./assect/second/avatar_placeholder (4).png",
    text:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
},
{
    id: 1,
    reviewHead: "chika",
    likes: 5,
    img: "./assect/second/avatar_placeholder .png",
    text:
        "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
}
]


let reviewContainer = document.getElementById("review-container")
function displaylikes(noOflikes) {
    let stars = ``; // start with an empty string
    for ( let n = 0; n < noOflikes; n++ ){
        stars += `&#9733`; //add a star for each
    }
    return stars; //return the start sstring
}


review.map((item) => {
const stars = displaylikes(item.likes); //get the stars from this review

    reviewContainer.innerHTML += `
                <div class="review">
                <div>
                    <img src="${item.img}" alt="" class"review-img">
                </div>
                <div>
                    <h5 class"review-head">${item.reviewHead}</h5>
                    <p class"review-text">${item.text}</p>

                    <span class="text-2x1 font-bold">${stars}</span>
                    <div class"likes-reply container">
                        <span>like</span>
                        <span>reply</span>
                    </div>
                </div>
            </div>
    `

    
}) 