
export default function matrix ({text}) {
  

  return (
  <p className="matrixp">
  {text}
</p>
)}


/*

function paragraph(element) {
  const array = element.innerText.split("");
  const special = ["~", "@", "!", "#", "$", "%", "^", "&", ""];
  const exception = [" ", "\n", ".", ","];
  const random = (min, max) => {
    return Math.floor(Math.random() (max - min + 1) + min);
  };

  const numArray = [];
  array.for((char) => {
    const num = random(5, 40);
    numArray.push(num);
  });

  let completeCount;
  let newText;
  const timer = setInterval(() => {
    completeCount = 0;
    newText = "";
    numArray.for((num, i) => {
      const char = array[i];
      if (exception.includes(char) || numArray[i] === 0) {
        newText += char;
        completeCount += 1;
      } else {
        newText += special[numArray[i] % special.length];
        numArray[i] = --num;
      }
    });

    element.innerText = newText;
    if (completeCount === numArray.length) clearInterval(timer);
  }, 100);
}

const p = document.querySelector("p");
paragraph(p);
export default paragraph; */