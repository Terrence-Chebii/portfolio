function toggleDetails(detailsId, iconClass) {
    $(detailsId).toggle();
    $(iconClass).toggle();
  }
  $(document).ready(function() {
    $(".Designicon").click(function() {
      toggleDetails("#designDetails", ".Designicon");
    });
    $("#designDetails").click(function() {
      toggleDetails("#designDetails", ".Designicon");
    });
    $(".Developmenticon").click(function() {
      toggleDetails("#developmentDetails", ".Developmenticon");
    });
    $("#developmentDetails").click(function() {
      toggleDetails("#developmentDetails", ".Developmenticon");
    });
    $(".Managementicon").click(function() {
      toggleDetails("#managementDetails", ".Managementicon");
    });
    $("#managementDetails").click(function() {
      toggleDetails("#managementDetails", ".Managementicon");
    })});

   