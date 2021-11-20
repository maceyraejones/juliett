$(function () {

    console.log("document is ready!");
  
    let carNames = [
      ["Sports Car", ["Ramone", "Cruz Ramirez", "Finn McMissile", "Flo"]],
      ["Race Car", ["Lightning McQueen", "Cal Weathers", "Chick Hicks"]],
      ["Normal Car", ["Guido", "Tex Dinoco", "Mac"]],
      ["Old Car", ["Mater", "Dusty Rusteze"]]
    ];


  
    //when user selects species of pet...load in names from array
    $("#carKind").on("change", function (e) {
      //enables the pet name dropdown
      $("#carName").prop("disabled", false);
  
      let inputVal = this.value;
  
      // console.log(inputVal);
  
      //loop though array of pet names
      $.each(carNames, function (key, value) {
        //match pet name to user selected
        if (inputVal === value[0]) {
          // console.log(value[0] + key + value);
          $.each(value, function (nestKey, nestValue) {
            // console.log(nestKey);
  
            switch (nestKey) {
              case 0:
                $("label[for=carName]").text(nestValue);
                $("#carName").empty();
                $("#carName").append(
                  $("<option>").text(`select a ${nestValue} `)
                );
                break;
              case 1:
                $.each(nestValue, function (nameKey, nameValue) {
                  console.log(nameKey, nameValue);
  
                  $("#carName").append(
                    $("<option>").val(nameValue).text(nameValue)
                  );
                });
                break;

    $("form").submit(function(){
    alert("Car choice submitted!");
    });

    $("form").validate({
     debug: true
    });
            }
          });
        }
      });
    });
  
  
  });
