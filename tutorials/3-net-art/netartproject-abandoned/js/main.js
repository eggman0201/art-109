// console.log("javascript!")

// there has GOT to be a better way of doing this bruh

// select html div elements 

const start = document.querySelector('#start');
const wakeup_1 = document.querySelector('#wakeup-1');
const wakeup_2 = document.querySelector('#wakeup-2');
const timecheck_1 = document.querySelector('#timecheck-1');
const timecheck_2 = document.querySelector('#timecheck-2');
const timecheck_3 = document.querySelector('#timecheck-3');
const timecheck_4 = document.querySelector('#timecheck-4');
const choice_makeup = document.querySelector('#choice-makeup');
const choice_nomakeup_hairchoice = document.querySelector('#choice-nomakeup-hairchoice');
const choice_nomakeup_yeshair = document.querySelector('#choice-nomakeup-yeshair');
const choice_nomakeup_nohair = document.querySelector('#choice-nomakeup-nohair');
const choice_glammakeup_outfit = document.querySelector('#choice-glammakeup-outfit');
const choice_simplemakeup_outfit = document.querySelector('#choice-simplemakeup-outfit');
const choice_anymakeup_cutefit_hair = document.querySelector('#choice-anymakeup-cutefit-hair');
const choice_anymakeup_cutefit_hair_1 = document.querySelector('#choice-anymakeup-cutefit-hair-1');
const choice_anymakeup_cutefit_hair_2 = document.querySelector('#choice-anymakeup-cutefit-hair-2');
const choice_anymakeup_cutefit_hair_3 = document.querySelector('#choice-anymakeup-cutefit-hair-3');
const choice_anymakeup_cutefit_hair_4 = document.querySelector('#choice-anymakeup-cutefit-hair-4');
const choice_anymakeup_cutefit_hair_5 = document.querySelector('#choice-anymakeup-cutefit-hair-5');
const choice_anymakeup_cutefit_hairchoice_1 = document.querySelector('#choice-anymakeup-cutefit-hairchoice');
const choice_anymakeup_cutefit_hairchoice_timecheck = document.querySelector('#choice-anymakeup-cutefit-hairchoice-timecheck');
const choice_anymakeup_cutefit_hairchoice_freakout_1 = document.querySelector('#choice-anymakeup-cutefit-hairchoice-freakout-1');
const choice_anymakeup_cutefit_hairchoice_freakout_2 = document.querySelector('#choice-anymakeup-cutefit-hairchoice-freakout-2');
const choice_anymakeup_cutefit_hairchoice_freakout_3 = document.querySelector('#choice-anymakeup-cutefit-hairchoice-freakout-3');
const choice_anymakeup_cutefit_hairchoice_freakout_4 = document.querySelector('#choice-anymakeup-cutefit-hairchoice-freakout-4');
const choice_anymakeup_cutefit_hairchoice_yesno = document.querySelector('#choice-anymakeup-cutefit-hairchoice-yesno');
const choice_anymakeup_cutefit_hairchoice_no = document.querySelector('#choice-anymakeup-cutefit-hairchoice-no');
const choice_anymakeup_cutefit_hairchoice_no_cry = document.querySelector('#choice-anymakeup-cutefit-hairchoice-no-cry');
const choice_anymakeup_cutefit_hairchoice_yes_drive = document.querySelector('#choice-anymakeup-cutefit-hairchoice-yes-drive');
const choice_nomakeup_hairchoice_drive = document.querySelector('#choice-nomakeup-hairchoice-drive');
const choice_nomakeup_hairchoice_drive_errands = document.querySelector('#choice-nomakeup-hairchoice-drive-errands');
const choice_nomakeup_hairchoice_drive_errands_yes = document.querySelector('#choice-nomakeup-hairchoice-drive-errands-yes');
const choice_nomakeup_hairchoice_drive_errands_finaldrive = document.querySelector('#choice-nomakeup-hairchoice-drive-errands-finaldrive');
const choice_anymakeup_bumfit_drive = document.querySelector('#choice-anymakeup-bumfit-drive');
const ending1_1 = document.querySelector('#ending1-1');
const ending1_2 = document.querySelector('#ending1-2');
const ending1_3 = document.querySelector('#ending1-3');
const ending1_4 = document.querySelector('#ending1-4');
const ending1_5 = document.querySelector('#ending1-5');
const ending1_6 = document.querySelector('#ending1-6');
const ending1_7 = document.querySelector('#ending1-7');
const ending2_1 = document.querySelector('#ending2-1');
const ending2_2 = document.querySelector('#ending2-2');
const ending2_3 = document.querySelector('#ending2-3');
const ending2_4 = document.querySelector('#ending2-4');
const ending2_5 = document.querySelector('#ending2-5');
const ending2_6 = document.querySelector('#ending2-6');
const ending2_7 = document.querySelector('#ending2-7');
const ending2_8 = document.querySelector('#ending2-8');
const ending3_1 = document.querySelector('#ending3-1');
const ending3_2 = document.querySelector('#ending3-2');
const ending3_3 = document.querySelector('#ending3-3');
const ending3_4 = document.querySelector('#ending3-4');
const ending3_5 = document.querySelector('#ending3-5');
const ending3_6 = document.querySelector('#ending3-6');
const ending3_7 = document.querySelector('#ending3-7');
const ending3_8 = document.querySelector('#ending3-8');
const ending4_1 = document.querySelector('#ending4-1');
const ending4_2 = document.querySelector('#ending4-2');
const ending4_3 = document.querySelector('#ending4-3');
const ending4_4 = document.querySelector('#ending4-4');


// select html buttons

const start_button = document.querySelector('#start-button');
const stayup = document.querySelector('#stayup');
const wakeup_duplicate = document.querySelector('#wakeup-duplicate');
const wakeup_duplicate_1 = document.querySelector('#wakeup-duplicate-1');
const wakeup_duplicate_2 = document.querySelector('#wakeup-duplicate-2');
const wakeup_duplicate_3 = document.querySelector('#wakeup-duplicate-3');
const confirm_1 = document.querySelector('#confirm-1');
const confirm_2 = document.querySelector('#confirm-2');
const confirm_3 = document.querySelector('#confirm-3');
const chase = document.querySelector('.chase');
const nostare = document.querySelector('#nostare');
const yesstare = document.querySelector('#yesstare');
const nomakeup = document.querySelector('#nomakeup');
const simplemakeup = document.querySelector('#simplemakeup');
const glammakeup = document.querySelector('#glammakeup');
const nomakeup_nohair = document.querySelector('#nomakeup-nohair');
const nomakeup_yeshair = document.querySelector('#nomakeup-yeshair');
const nomakeup_nohair_early = document.querySelector('#nomakeup_nohair_early');
const nomakeup_nohair_procrastinate = document.querySelector('#nomakeup_nohair_procrastinate');
const nomakeupyeshair_early = document.querySelector('#nomakeup_yeshair_early');
const nomakeupyeshair_procrastinate = document.querySelector('#nomakeup_yeshair_procrastinate');
const glammakeup_cutefit = document.querySelector('#glammakeup-cutefit');
const glammakeup_bumfit = document.querySelector('#glammakeup-bumfit');
const simplemakeup_cutefit = document.querySelector('#simplemakeup-cutefit');
const simplemakeup_bumfit = document.querySelector('#simplemakeup-bumfit');
const fuck_1 = document.querySelector('#fuck-1');
const fuck_2 = document.querySelector('#fuck-2');
const fuck_3 = document.querySelector('#fuck-3');
const fuck_4 = document.querySelector('#fuck-4');
const fuck_5 = document.querySelector('#fuck-5');
const fuck_6 = document.querySelector('#fuck-6');
const cutefit_hair_no = document.querySelector('#cutefit-hair-no');
const cutefit_hair_yes = document.querySelector('#cutefit-hair-yes');
const panic_1 = document.querySelector('#panic-1');
const panic_2 = document.querySelector('#panic-2');
const panic_3 = document.querySelector('#panic-3');
const panic_4 = document.querySelector('#panic-4');
const panic_5 = document.querySelector('#panic-5');
const goanyway = document.querySelector('#goanyway');
const giveup = document.querySelector('#giveup');
const cryaboutit = document.querySelector('#cryaboutit');
const errands_yes = document.querySelector('#errands-yes');
const errands_no = document.querySelector('#errand-no');
const normal_1 = document.querySelector('#normal-1');
const speed_1 = document.querySelector('#speed-1');
const normal_2 = document.querySelector('#normal-2');
const speed_2 = document.querySelector('#speed-2');
const normal_3 = document.querySelector('#normal-3');
const speed_3 = document.querySelector('#speed-3');
const normal_4 = document.querySelector('#normal-4');
const speed_4 = document.querySelector('#speed-4');
const normal_5 = document.querySelector('#normal-5');
const speed_5 = document.querySelector('#speed-5');
const ending1_cont_1 = document.querySelector('#ending1-cont-1');
const ending1_cont_2 = document.querySelector('#ending1-cont-2');
const ending1_cont_3 = document.querySelector('#ending1-cont-3');
const ending1_cont_4 = document.querySelector('#ending1-cont-4');
const ending1_cont_5 = document.querySelector('#ending1-cont-5');
const ending1_cont_6 = document.querySelector('#ending1-cont-6');
const ending2_cont_1 = document.querySelector('#ending2-cont-1');
const ending2_cont_2 = document.querySelector('#ending2-cont-2');
const ending2_cont_3 = document.querySelector('#ending2-cont-3');
const ending2_cont_4 = document.querySelector('#ending2-cont-4');
const ending2_cont_5 = document.querySelector('#ending2-cont-5');
const ending2_cont_6 = document.querySelector('#ending2-cont-6');
const ending2_cont_7 = document.querySelector('#ending2-cont-7');
const ending3_cont_1 = document.querySelector('#ending3-cont-1');
const ending3_cont_2 = document.querySelector('#ending3-cont-2');
const ending3_cont_3 = document.querySelector('#ending3-cont-3');
const ending3_cont_4 = document.querySelector('#ending3-cont-4');
const ending3_cont_5 = document.querySelector('#ending3-cont-5');
const ending3_cont_6 = document.querySelector('#ending3-cont-6');
const ending3_cont_7 = document.querySelector('#ending3-cont-7');
const ending4_cont_1 = document.querySelector('#ending4-cont-1');
const ending4_cont_2 = document.querySelector('#ending4-cont-2');
const ending4_cont_3 = document.querySelector('#ending4-cont-3');
const tryagain_1 = document.querySelector('#tryagain-1');
const tryagain_2 = document.querySelector('#tryagain-2');
const tryagain_3 = document.querySelector('#tryagain-3');
const tryagain_4 = document.querySelector('#tryagain-4');
const tryagain_5 = document.querySelector('#tryagain-5');
const tryagain_6 = document.querySelector('#tryagain-6');
const choice_glammakeup_1 = document.querySelector('#choice-glammakeup-1');
const choice_glammakeup_2 = document.querySelector('#choice-glammakeup-2');
const choice_glammakeup_3 = document.querySelector('#choice-glammakeup-3');
const choice_glammakeup_4 = document.querySelector('#choice-glammakeup-4');
const choice_glammakeup_5 = document.querySelector('#choice-glammakeup-5');
const choice_glammakeup_6 = document.querySelector('#choice-glammakeup-6');
const choice_glammakeup_7 = document.querySelector('#choice-glammakeup-7');
const choice_glammakeup_8 = document.querySelector('#choice-glammakeup-8');
const choice_glammakeup_9 = document.querySelector('#choice-glammakeup-9');
const choice_glammakeup_10 = document.querySelector('#choice-glammakeup-10');
const choice_glammakeup_11 = document.querySelector('#choice-glammakeup-11');
const choice_glammakeup_12 = document.querySelector('#choice-glammakeup-12');
const choice_glammakeup_13 = document.querySelector('#choice-glammakeup-13');
const choice_glammakeup_14 = document.querySelector('#choice-glammakeup-14');
const choice_glammakeup_15 = document.querySelector('#choice-glammakeup-15');
const choice_glammakeup_16 = document.querySelector('#choice-glammakeup-16');
const choice_glammakeup_17 = document.querySelector('#choice-glammakeup-17');
const choice_glammakeup_18 = document.querySelector('#choice-glammakeup-18');
const choice_glammakeup_19 = document.querySelector('#choice-glammakeup-19');
const choice_glammakeup_20 = document.querySelector('#choice-glammakeup-21');
const choice_glammakeup_21 = document.querySelector('#choice-glammakeup-22');
const choice_glammakeup_22 = document.querySelector('#choice-glammakeup-23');
const choice_glammakeup_23 = document.querySelector('#choice-glammakeup-20');
const choice_glammakeup_24 = document.querySelector('#choice-glammakeup-24');

// select html audio
const audio = document.querySelector ('audio');

//making branches for endings

start_button.addEventListener("click", ()=>{
    wakeup_1.classList.remove("go-to-party");
})

stayup.addEventListener("click", ()=>{
    wakeup_2.classList.remove("go-to-party");
})

wakeup_duplicate.addEventListener("click", ()=>{
    wakeup_duplicate_1.classList.remove("go-to-party");
})

wakeup_duplicate_1.addEventListener("click", ()=>{
    wakeup_duplicate_2.classList.remove("go-to-party");
})

wakeup_duplicate_2.addEventListener("click", ()=>{
    wakeup_duplicate_3.classList.remove("go-to-party");
})

wakeup_duplicate_3.addEventListener("click", ()=>{
    timecheck_1.classList.remove("go-to-party");
})