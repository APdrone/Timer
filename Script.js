
const divEl = document.querySelector("div");


const setValue = (text) => {
  divEl.innerHTML = text;
};

setTimeout(() => {
  console.log(10);
  setValue(10);
  setTimeout(() => {
    console.log(9);
    setValue(9);
    setTimeout(() => {
      console.log(8);
      setValue(8);
      setTimeout(() => {
        console.log(7);
        setValue(7);
        setTimeout(() => {
          console.log(6);
          setValue(6);
          setTimeout(() => {
            console.log(5);
            setValue(5);
            setTimeout(() => {
              console.log(4);
              setValue(4);
              setTimeout(() => {
                console.log(3);
                setValue(3);
                setTimeout(() => {
                  console.log(2);
                  setValue(2);
                  setTimeout(() => {
                    console.log(1);
                    setValue(1);
                    setTimeout(() => {
                      console.log(0);
                      setValue(0);
                      setTimeout(() => {
                        console.log("Happy Independence day");
                        setValue("Happy Independence day");
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
