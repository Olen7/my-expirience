const passwordInput = document.getElementById('passwordInput');
    const requirementList = document.querySelectorAll('.requirement');

    const requirements = [
      { regex: /.{8,}/, index: 0 },
      { regex: /[0-9]/, index: 1 },
      { regex: /[a-z]/, index: 2 },
      { regex: /[^A-Za-z0-9]/, index: 3 },
      { regex: /[A-Z]/, index: 4 },
    ];

    passwordInput.addEventListener("keyup", (e) => {
      requirements.forEach((item) => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];
        if (isValid) {
          requirementItem.classList.add("valid");
          requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
          requirementItem.classList.remove("valid");
          requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
      });
    });