




////////////RangeSlide////////////
$(document).ready(function () {
    $("#rangeID1").change(function () {
        var newval = $(this).val();
        $("#spanID1").text(newval);
    });
});

$(document).ready(function () {
    $("#rangeID2").change(function () {
        var newval = $(this).val();
        $("#spanID2").val(newval);
    });
});
///////////////////////////////////