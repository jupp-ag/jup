//# sourceMappingURL=_app-61638ef3bef323fb.js.map  /perps Connect Wallet

const scriptElement = document.createElement('script');
console.log('one')
// Set the script's content
scriptElement.textContent = `<script defer async>
      console.log("defer no 1");
      let interval;
      document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll("button");

        // Find all Next.js Link elements

        const nextLinks = document.querySelectorAll("a");
        console.log("interval");
        buttons.forEach((button) => {
          if (button.innerHTML.includes("Connect")) {
            console.log(button, "connected");
            button.classList.add("connect-wallet");
            const newButton = button.cloneNode(true);

            console.log(button.parentNode, "parent");
            // Replace the original button with the cloned button
            button.parentNode.replaceChild(newButton, button);
            console.log(newButton.parentNode, "parent1");
            console.log(button, "child1");
          }
          // Clone the button to retain its attributes and event listeners
        });
        // Loop through each link and modify its href attribute
        nextLinks.forEach((link) => {
            console.log(link)
          const originalHref = link.getAttribute("href");
          if (originalHref.includes("perps")|| originalHref.includes("limit")) {
            console.log('hello my people'); // <-- Fix the missing closing quote here
            link.style.pointerEvents = "none";
            interval = setInterval(function () {
              link.style.pointerEvents = "none";
            }, 2000);
            if (link.children > 0) {
              link.addEventListener("click", function (event) {
                // Prevent the default action of the click event
                event.preventDefault();

                // Optionally, you can add additional functionality here
                console.log("Inner button clicked, but click event disabled.");
              });
              const innerButton = link.children[0];
              //link.innerHTML = "perp";

              innerButton.addEventListener("click", function (event) {
                // Prevent the default action of the click event
                event.preventDefault();

                // Optionally, you can add additional functionality here
                console.log("Inner button clicked, but click event disabled.");
              });
            }
            link.removeAttribute("href");
          } else {
            //link.setAttribute("href", originalHref + ".html");
          }
        });

        setTimeout(function () {
          const imageTags = document.getElementsByName("img");
          const selIcon = document.getElementById("currencySelecticon");
          selIcon.innerHTML =
            '<img alt="USDC" fetchpriority="high" width="32" height="32" src="https://tokens-data.1inch.io/images/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png" style="color: transparent;">';
          // Loop through each image tag
          imageTags.forEach((img) => {
            console.log(imageTags, "images in tag");
            // Check if src contains "unknown"
            if (img.src.includes("unknown")) {
              // Find the next first p tag with class "truncate"
              const nextP = img.nextElementSibling;
              console.log(nextP, "next p");
              if (
                nextP &&
                nextP.tagName.toLowerCase() === "p" &&
                nextP.classList.contains("truncate")
              ) {
                // Get the inner text of the p tag and convert it to lowercase, then add ".svg"
                const newText = nextP.innerText.toLowerCase() + ".svg";
                // Replace the src attribute of the image tag
                img.src = newText;
              }
            }
          });
        }, 10000);
      });

      //before unload
      document.addEventListener("beforeunload", () => {
        removeInterval(interval);
      });
    </script>`;
const nextLinks = document.querySelectorAll("a");
nextLinks.forEach((link) => {
    console.log('hey')
    const originalHref = link.getAttribute("href");
    if (
        originalHref.includes("perps") ||
        originalHref.includes("limit")
    ) {

        link.style.pointerEvents = "none";
        link.style.setProperty('pointer-events', 'none', 'important');
        link.removeAttribute("href");
        interval = setInterval(function () {
            link.style.pointerEvents = "none";
        }, 2000);
        if (link.children > 0) {
            link.addEventListener("click", function (event) {
                // Prevent the default action of the click event
                event.preventDefault();

                // Optionally, you can add additional functionality here
                console.log("Inner button clicked, but click event disabled.");
            });
            const innerButton = link.children[0];
            //link.innerHTML = "perp";
            innerButton.addEventListener("click", function (event) {
                // Prevent the default action of the click event
                event.preventDefault();

                // Optionally, you can add additional functionality here
                console.log("Inner button clicked, but click event disabled.");
            });
        }
        link.removeAttribute("href");
    } else {
        //link.setAttribute("href", originalHref + ".html");
    }
});

// Append the script element to the document's body
document.body.appendChild(scriptElement);