var env = false;
var scope = false;
var code = false;

var files = {
    'clues' : {
        'maze' : [      'https://drive.google.com/file/d/1oKo1pRgWDfGjw2GGklDhwaC80R8xkjD0/view',
                        'https://drive.google.com/file/d/1j-bjtiahJralQYRk7KQYchGu5MWQV0S1/view',
                        'https://drive.google.com/file/d/1QQnv3tfG6n3v1SIJ4TOnHS8gvI6Lj0jB/view'],
        'xander' : [    'https://drive.google.com/file/d/1F--6SHjQx668XT442zh7odKwx7bd5yIX/view'],
        'babblefish' : [ 'https://drive.google.com/file/d/1J_x4aeg6ycyhHlFFrHBOvtJIfQrskTIR/view',
                        'https://drive.google.com/file/d/1oY9V27cuJZQZm3NtpE2IFLCm69G_DG46/view'],
        'nightcity' : [    'https://drive.google.com/file/d/1Jz4wav5HjkD5JiW00jypk_eZyqFWXchQ/view',
                        'https://drive.google.com/file/d/1J19XNYBMDyuApQ7zeaPN7kCJWQq0sm41/view',
                        'https://drive.google.com/file/d/1YC_etOxzpWfO6RlpEO1SJWPA9FdmCt9W/view',
                        'https://drive.google.com/file/d/1061sFwnsiG0nN0zf7ulO1JrbtrIQynso/view',
                        'https://drive.google.com/file/d/1cgagMym5qZf-8CNOH175QpUjMtKC2LEM/view',
                        'https://drive.google.com/file/d/1A1maMDpsWTSixNpjA0ZWAtBMmL5vrjyS/view',
                        'https://drive.google.com/file/d/1TP6gzVBW7exEZDQ5FZ-kR_JXUrfViKKr/view']
    }, 
    'evidence' : {
        'maze' : [      'https://drive.google.com/file/d/1yfSjdVYrmS3EmuLUrc7VrX2C0Kmd4gi3/view',
                        'https://drive.google.com/file/d/1ciKzQCojPv10URSbMvPT-1N1Uy_uy_M9/view'],
        'xander' : [    'https://drive.google.com/file/d/1UPQh9AY5fM9Y0Nn3YXGjX04y3cOh3hmh/view'],
        'babblefish' : [ 'https://drive.google.com/file/d/1OxC5ahJvT90VG_k_uFFRRih0cX7LxBHe/view'],
        'nightcity' : [    'https://drive.google.com/file/d/1qdCZeepbyiivn2MpCE-XVX_YoVhNINj-/view',
                        'https://drive.google.com/file/d/1HBVs0Am2T3xS5iBsqi7U-61rvo7jq-ZK/view',
                        'https://drive.google.com/file/d/1LbHVVXjWL4Sgf7rAhD9AHfevm2yuF6w4/view',
                        'https://drive.google.com/file/d/1gOQL7c5GdUVkEuhIg3Wi0RfpxbEgj8QV/view']
    },
    'scenario' : {
        'maze' : [      'https://drive.google.com/file/d/12n6Ftbpzm5TcLVm-s14AU1-R66z81-Ot/view',
                        'https://drive.google.com/file/d/1Wssnq_aO8tjKIQe08rlZAifg_7mx_ADW/view' ],
        'xander' : [    'https://drive.google.com/file/d/1lRGUVSRlnHk9nsWgOldi37BTCeNbx3kZ/view',
                        'https://drive.google.com/file/d/1R7FGJlMpllJq-BMm0V6AGQprKWhgxqll/view'],
        'babblefish' : [ 'https://drive.google.com/file/d/1DeLgnG5FBCoeLDG-DO4kDr9xcyM51yXe/view',
                        'https://drive.google.com/file/d/1JgBk-ZJmjuAupOcH7whR5VmmRq7RGr9M/view'],
        'nightcity' : [    'https://drive.google.com/file/d/1ObjqRHxTgpOXZmDecYPdS8t17RJtSYcR/view']
    }
}

$("a.reload").on("click", function(e){
    e.preventDefault();
    e.stopImmediatePropagation()
    location.reload()
});
$("#fail_div, #tie_div").on("click", "a.reload", function(e){
    e.preventDefault();
    e.stopImmediatePropagation()
    location.reload()
});

$("#startGame").on("click", function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    $(".error-div").addClass("hidden")
    $("input[type=radio]").closest("div").removeClass('is-invalid')
    $("select").removeClass('is-invalid')
    if($("input[type=radio]:checked").val()){
        env = ($("input[type=radio]:checked").val()).toLowerCase();
    }
    else {
        $("input[type=radio]").closest("div").addClass('is-invalid')
        $(".error-div").removeClass("hidden")
    }
    if($("select").val()){
        scope = ($("select").val()).toLowerCase();
    }
    else {
        $("select").addClass('is-invalid')
        $(".error-div").removeClass("hidden")
    }
    if($(".error-div").hasClass("hidden") == false){
        return;
    }
    if($("input[type=text]").val()){
        code = ($("input[type=text]").val()).toLowerCase();
    }
    else {
        code = false;
    }
    // console.log(env)
    // console.log(scope)
    // console.log(code)
    if (env && scope){
        $("#form_layer").addClass("hidden");
        $("#game_layer").removeClass("hidden");
    }
    else {
        if (!env) {
            $("input[type=radio]").closest("div").addClass('is-invalid')
        }
        if (!scope) {
            $("select").addClass('is-invalid')
        }
        $(".error-div").removeClass("hidden")
        return
    }
    

})