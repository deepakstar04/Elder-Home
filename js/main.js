  const form = document.getElementById('form');
        const result = document.getElementById('result');
        
        form.addEventListener('submit', function(e) {
            const formData = new FormData(form);
            e.preventDefault();
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            result.innerHTML = "Please wait..."
        
            fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = json.message;
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "Something went wrong!";
                })
                .then(function() {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 3000);
                });
        });
    
        // Improved autoplay on hover (safe URL handling) Instagram, YouTube, Vimeo
    document.querySelectorAll("iframe").forEach(iframe => {
      const originalSrc = iframe.src;

      iframe.addEventListener("mouseenter", () => {
        if (!iframe.src.includes("autoplay=1")) {
          iframe.src = originalSrc + "?autoplay=1&mute=1";
        }
      });

      iframe.addEventListener("mouseleave", () => {
        iframe.src = originalSrc;
      });
    });