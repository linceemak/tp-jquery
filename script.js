


$(".slider").slick({
  centerMode: true,
  slidesToShow: 1,
  
});

function f1(){

  let add = document.createElement("button")
      add.textContent = ("Examen 1")
  
      document.body.appendChild(add)
  
  add.addEventListener("click",() =>{
    const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Histoire", "Anglais", "Mathematiques", "Geographie", "Art-Plastique", "Litterature"],
    datasets: [{
      label: "Elias",
      data: [10, 15, 5, 5, 12, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

  })}

  f1()


  function f2(){

    let add2= document.createElement("button")
        add2.textContent = ("Examen 2")
    
        document.body.appendChild(add2)
    
    add2.addEventListener("click",() =>{
      const ctx = document.getElementById('myChart1');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Histoire", "Anglais", "Mathematiques", "Geographie", "Art-Plastique", "Litterature"],
      datasets: [{
        label: "Marco",
        data: [15, 0, 6, 10, 11, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

    })}
  
    f2()


    function f3(){

      let add = document.createElement("button")
          add.textContent = ("Examen 3")
      
          document.body.appendChild(add)
      
      add.addEventListener("click",() =>{
        const ctx = document.getElementById('myChart2');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Histoire", "Anglais", "Mathematiques", "Geographie", "Art-Plastique", "Litterature"],
        datasets: [{
          label: "Jade",
          data: [2, 10, 8, 14, 7, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
   
      })}
    
      f3()


      function f4(){

        let add = document.createElement("button")
            add.textContent = ("Examen 4")
        
            document.body.appendChild(add)
        
        add.addEventListener("click",() =>{
          const ctx = document.getElementById('myChart3');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Histoire", "Anglais", "Mathematiques", "Geographie", "Art-Plastique", "Litterature"],
          datasets: [{
            label: "Edan",
            data: [10, 1, 13, 15, 9, 0.5],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    
        })}
      
        f4()
