function toggleCard(button) {
    var cardBody = button.parentElement;
    var moreInfo = cardBody.querySelector(".more-info");

    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}