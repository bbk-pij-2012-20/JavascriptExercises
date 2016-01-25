$(document).ready(function(){

  $("#rateourcontentleaderboardupload").click(function() {

    console.log("clicked button");
    upload();

  });

  function upload() {

    if (typeof (XSLTProcessor) != "undefined") {

      $.ajax({

        url: "transforming1to5.xsl",
        datatype: "xml",
        async: true,
        success: function(data){

          var xsl = data;
          $.ajax({
            url: "tenMovies.xml",
            datatype: "xml",
            async: true,
            success: function(data){

              var xml = data;
              var proc = new XSLTProcessor();
              proc.importStylesheet(xsl);
              var resultFragment = proc.transformToFragment(xml, document);
              alert("reached line 32 just before replacewith 1 to 5");
              $("#imagesnamesstars1to5").replaceWith(resultFragment);

            }

          });

        }

      });

      $.ajax({

        url: "transforming6to10.xsl",
        datatype: "xml",
        async: true,
        success: function(data){

          var xsl = data;
          $.ajax({
            url: "tenMovies.xml",
            datatype: "xml",
            async: false,
            success: function(data){

              var xml = data;
              var proc = new XSLTProcessor();
              proc.importStylesheet(xsl);
              var resultFragment = proc.transformToFragment(xml, document);
              alert("reached line 61 just before replace with 6 to 10");
              $("#imagesnamesstars6to10").replaceWith(resultFragment);

            }

          });

        }

      });

    } else {

      alert("Your browser is not able to view this page.");

    }

  }

})
