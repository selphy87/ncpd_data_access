var env = false;
var scope = false;
var code = false;

var files = {
   
        'evid_bab_02':  'https://drive.google.com/file/d/1x-9JPvVTc2VuPfT-qz9RIYNnbqmq-oYZ/view',
        'evid_bab_01':  'https://drive.google.com/file/d/11qnqN4YsshM3Vb5qyrKmBOcThipGJjFH/view',
        'evid_bwb_03':  'https://drive.google.com/file/d/18e7LE6OMphPEGW4g0KOfGixmIuBU1DDT/view',
        'evid_maz_02':  'https://drive.google.com/file/d/16kRdTQ8HXaFsfXR_FSeLM-1llxM0DWNl/view',
        'evid_maz_01':  'https://drive.google.com/file/d/1p75FBQA7IVfFjm2TP-N_O44l4KUuzjDX/view',
        'evid_plc_03':  'https://drive.google.com/file/d/1EwZW7R3XoP6LQVa2tPGigt5sg8vYlYUO/view',
        'evid_pll_02':  'https://drive.google.com/file/d/1y6xbxWYLRaoLD82IBHn9y801P33zsFWu/view',
        'evid_pol_01':  'https://drive.google.com/file/d/1-XbA5Pw6sAEmuHE7JxNZdnC6jGvVq5kw/view',
        'evid_xan_01':  'https://drive.google.com/file/d/1UbwOWWUjeb6uWasZunnM-RUlqi0eqPQ7/view',
        'evid_xan_02':  'https://drive.google.com/file/d/1gArujBUXbTiev0aySw4ojwk8a_YKy858/view',
        'evid_xax_03':  'https://drive.google.com/file/d/1NYCb8BN3qeS61zLExqpwxFk7F2EGwulX/view',
        'indd_bab_02':  'https://drive.google.com/file/d/1O0OYAZCFvj3jMKNyVdk1MIBvHm0b-KW0/view',
        'clue_bab_01':  'https://drive.google.com/file/d/1Q4EsQR58q8UsBWAoTO9DjYrthi1wI4a5/view',
        'indd_bwb_03':  'https://drive.google.com/file/d/1vgt-G5BgewhOf3qNv4UfIug69-kv8k3S/view',
        'indd_bws_04':  'https://drive.google.com/file/d/1hzu6LfTYWXsqdxNeh6-WaA1pLDhP_qXf/view',
        'indd_bww_05':  'https://drive.google.com/file/d/1SUQ8V-H3UXJsEFc1256Fq2FXyj9kLswP/view',
        'indd_maa_04':  'https://drive.google.com/file/d/1fVkx2whAG6to0iC6ISxHVppm0VIStcUA/view',
        'indd_maz_02':  'https://drive.google.com/file/d/1h5CEQ2LMMG7qPviYCfK2HQeJgYKo-mwq/view',
        'indd_mze_03':  'https://drive.google.com/file/d/1kb5X3JFTKRin6g3RHr92lq-ra8HbdShM/view',
        'clue_maz_01':  'https://drive.google.com/file/d/1ecgD_rMvsm4un2uSYCUXGw4JUK-7nk4v/view',
        'indd_plc_03':  'https://drive.google.com/file/d/1sZg2gi_mPZEvTJ9hD3FANswJvYKxSPNf/view',
        'indd_pld_04':  'https://drive.google.com/file/d/1qOu6XT37-Hp7jHNM2IavfNij12LRcWg2/view',
        'indd_pll_02':  'https://drive.google.com/file/d/1-hL9z6elngkhI72opUrIFdKOKREUDi69/view',
        'clue_pol_01':  'https://drive.google.com/file/d/18FRtfrrSS7q79DqjK2QnOdw76En3yFGT/view',
        'clue_xan_01':  'https://drive.google.com/file/d/1M_m2X84ElKvq-29FYIUgfP-kzmUxlnKE/view',
        'indd_xan_02':  'https://drive.google.com/file/d/1acYKfv-y69ZgimZ9MUxNafcGFhWe9jOf/view',
        'indd_xax_03':  'https://drive.google.com/file/d/1ZRm8PlAKq0eIVF7FSnz1UQFU9cTJwLPt/view',
        'scen_bab_02':  'https://drive.google.com/file/d/1Ubtzc95CLcgmhrX2nBLmCDu3IXr9GUp3/view',
        'scen_bab_01':  'https://drive.google.com/file/d/1WYr-4O_t_IcV8ziLX9hHzMsQEhk8Pxb0/view',
        'scen_bwb_03':  'https://drive.google.com/file/d/18bhtTHeyXpqoBccyKDGc988mXgbrQTtG/view',
        'scen_bsw_04':  'https://drive.google.com/file/d/1wwHxzQo9Pz9vdSZ9EcvNuvkZPdMuPTJl/view',
        'scen_maz_02':  'https://drive.google.com/file/d/18BLmcMRCJU88VeETc8BXdeDrq_5Evu4S/view',
        'scen_mze_03':  'https://drive.google.com/file/d/1fIxgfSIw7sih4lrJXoQNl42n4VUiyp4N/view',
        'scen_maz_01':  'https://drive.google.com/file/d/13v0DeMapJcTIUYlpmjTzF29fQgpFJpWw/view',
        'scen_plc_03':  'https://drive.google.com/file/d/1f6Qe0QApr-tJGuytH75Crem1Y4QNxPCd/view',
        'scen_pld_04':  'https://drive.google.com/file/d/1IPaV-Haq0ZlX2gfEAQ-93kOIehyDp46Z/view',
        'scen_pll_02':  'https://drive.google.com/file/d/125S2prXtHwzhNAoPjIXDKKfTaiT_0lyE/view',
        'scen_pol_01':  'https://drive.google.com/file/d/1vaMGjG_z5XurY1zpHNvUAF3zhoK94xd5/view',
        'scen_ppd_05':  'https://drive.google.com/file/d/1QQ-Fg5hjLESXGZ9qcmSAMjyBdCsmbJk6/view',
        'scen_xan_01':  'https://drive.google.com/file/d/1fpRcCSiTCOT_ETyD2WaQgeMyfrc76xIY/view',
        'scen_xan_02':  'https://drive.google.com/file/d/11jGmhtFWAdgT23gInrndqlLsZ1s-7z_X/view',
        'scen_xax_03':  'https://drive.google.com/file/d/1gkcuZ6MQxqrOgwjymzgZN7g3OGQzf2bL/view'
}

$("a.reload").on("click", function(e){
    e.preventDefault();
    e.stopImmediatePropagation()
    location.reload()
});
$("#fail_div, #tie_div, #win_div").on("click", "a.reload", function(e){
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