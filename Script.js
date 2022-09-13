comp.style.display = "none";
comp_prof.style.display = "none";
xp.style.display = "none";
cs.style.display = "none";
ph.style.display = "none";
cont.style.display ="none";


function togg_comp1(){
  if(getComputedStyle(comp).display != "block"){
    comp.style.display = "block";
    comp_prof.style.display = "none";
    xp.style.display = "none";
    cs.style.display = "none";
    ph.style.display = "none";
    cont.style.display ="none";
  } else {
    comp.style.display = "none";
    }
};
togg_comp.onclick = togg_comp1

comp_prof.style.display = "none"

function togg_comp_prof1(){
  if(getComputedStyle(comp_prof).display != "block"){
    comp.style.display = "none";
    comp_prof.style.display = "block";
    xp.style.display = "none";
    cs.style.display = "none";
    ph.style.display = "none";
    cont.style.display ="none";
  } else {
    comp_prof.style.display = "none";
    }
};
togg_comp_prof.onclick = togg_comp_prof1

xp.style.display = "none"

function togg_xp1(){
  if(getComputedStyle(xp).display != "block"){
    comp.style.display = "none";
    comp_prof.style.display = "none";
    xp.style.display = "block";
    cs.style.display = "none";
    ph.style.display = "none";
    cont.style.display ="none";
  } else {
    xp.style.display = "none";
    }
};
togg_xp.onclick = togg_xp1

cs.style.display = "none"

function togg_cs1(){
  if(getComputedStyle(cs).display != "block"){
    comp.style.display = "none";
    comp_prof.style.display = "none";
    xp.style.display = "none";
    cs.style.display = "block";
    ph.style.display = "none";
    cont.style.display ="none";
  } else {
    cs.style.display = "none";
    }
};
togg_cs.onclick = togg_cs1

ph.style.display = "none"

function togg_ph1(){
  if(getComputedStyle(ph).display != "block"){
    comp.style.display = "none";
    comp_prof.style.display = "none";
    xp.style.display = "none";
    cs.style.display = "none";
    ph.style.display = "block";
    cont.style.display ="none";
  } else {
    ph.style.display = "none";
    }
};
togg_ph.onclick = togg_ph1

cont.style.display ="none"

function togg_cont1(){
  if(getComputedStyle(cont).display != "block"){
    comp.style.display = "none";
    comp_prof.style.display = "none";
    xp.style.display = "none";
    cs.style.display = "none";
    ph.style.display = "none";
    cont.style.display ="block";
  } else {
    cont.style.display = "none";
    }
};
togg_cont.onclick = togg_cont1