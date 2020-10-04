const EXPANSIONS = {
  PLANSPLOYS: 'Plans and Ploys'
};

const SECTION_IDS = {
  GLOBAL: 'global',
  INPUT_FORM: 'input',
  PLANS_SWITCH: 'plansSwitch',
  PLAYERS: 'players',
  ROOT: 'root',
  SETTINGS_FORM: 'settings',
};

const PLAYER_COUNT_GROUP_NAME = 'player_count';

function hasExpansion(expansion) {
  switch (expansion) {
    case EXPANSIONS.PLANS:
      return document.getElementById(SECTION_IDS.PLANS_SWITCH).checked;
  }
}
function shouldIncludeInvadersCivs() {
  return hasExpansion(EXPANSIONS.PLANS);
}

function shouldIncludeLandmarks() {
  return hasExpansion(EXPANSIONS.PLANS);
}

function getPlayerCount() {
  var selector = "input[name='" + PLAYER_COUNT_GROUP_NAME + "']";
  var playerCount = $(selector + ':checked').val();
  return parseInt(playerCount);
}
