require('../stylus/_all.styl');
var $ = require('jquery');
require('velocity-animate');

var ASSET_URL = '/build/assets/img/';

var $stage = null;
var $world = null;
var $terrain = null;
var $team = null;
var $teamListHome = null;
var $players = null;
var $playersHome = null;
var $playersAway = null;
var $switchBtn = null;
var $loadBtn = null;
var $closeBtn = null;
var $heading = null;
var $subHeading = null;
var $loading = null;
var $switcher = null;
var data = {};

var state = {
    home: true,
    disabHover: false,
    swapSides: function() {
        if (this.home) {
            return this.home = false;
        } else {
            return this.home = true;
        }
    },
    curSide: function() {
        if (this.home) {
            return 'home';
        } else {
            return 'away';
        }
    }
};

var pos = {
    world: {
        baseX: 0,
        baseY: 0,
        baseZ: -200
    },
    def: {
        goalie: [0, -50]
    }
};

var dom = {
    addPlayers: function(side) {
        var $el, key, ref, val;
        ref = data.players[side];
        for (key in ref) {
            val = ref[key];
            val.side = side;
            $el = this.addPlayer(val);
            $team.append($el);
        }
        $players = $('.js-player');
        $playersHome = $('.js-player[data-side="home"]');
        return $playersAway = $('.js-player[data-side="away"]');
    },
    addPlayer: function(data) {
        var $el;
        $el = $('<div class="js-player player" data-name="' + data.name + '" data-side="' + data.side + '" data-x="' + data.x + '" data-y="' + data.y + '"></div>');
        $el.append('<div class="player__label"><span>' + data.name + '</span></div>');
        $el.append('<div class="player__img"><img src= ' + ASSET_URL + data.asset + '></div>');
        $el.prepend('<div class="player__card"> </div>');
        $el.prepend('<div class="player__placeholder"></div>');
        this.populateCard($el.find('.player__card'), data);
        return $el;
    },
    preloadImages: function(preload) {
        var i, promises;
        promises = [];
        i = 0;
        while (i < preload.length) {
            (function(url, promise) {
                var img;
                img = new Image;
                img.onload = function() {
                    return promise.resolve();
                };
                return img.src = url;
            })(preload[i], promises[i] = $.Deferred());
            i++;
        }
        return $.when.apply($, promises).done(function() {
            scenes.endLoading();
            return scenes.loadIn(1600);
        });
    },
    populateCard: function($el, data) {
        return $el.append('<h3>' + data.name + '</h3>' + '<ul class="player__card__list"><li><span>DOB</span><br/>' + data.dob + ' yr</li><li><span>Height</span><br/>' + data.height + '</li><li><span>Origin</span><br/>' + data.origin + '</li></ul>' + '<ul class="player__card__list player__card__list--last"><li><span>Games</span><br/>' + data.games + '</li><li><span>Goals</span><br/>' + data.goals + '</li></ul>');
    },
    displayNone: function($el) {
        return $el.css('display', 'none');
    }
};

var events = {
    attachAll: function() {
        $switchBtn.on('click', function(e) {
            var $el;
            e.preventDefault();
            $el = $(this);
            if ($el.hasClass('disabled')) {
                return;
            }
            scenes.switchSides();
            $switchBtn.removeClass('disabled');
            return $el.addClass('disabled');
        });
        $loadBtn.on('click', function(e) {
            e.preventDefault();
            return scenes.loadIn();
        });
        return $players.on('click', function(e) {
            var $el;
            e.preventDefault();
            $el = $(this);
            if ($('.active').length) {
                return false;
            }
            $el.addClass('active');
            scenes.focusPlayer($el);
            return setTimeout((function() {
                return events.attachClose();
            }), 1);
        });
    },
    attachClose: function() {
        return $stage.one('click', function(e) {
            e.preventDefault();
            return scenes.unfocusPlayer();
        });
    }
};

var scenes = {
    preLoad: function() {
        $teamListHome.velocity({
            opacity: 0
        }, 0);

        $players.velocity({
            opacity: 0
        }, 0);

        $loadBtn.velocity({
            opacity: 0
        }, 0);

        $switcher.velocity({
            opacity: 0
        }, 0);

        $heading.velocity({
            opacity: 0
        }, 0);

        $subHeading.velocity({
            opacity: 0
        }, 0);

        $playersAway.css('display', 'none');

        $world.velocity({
            opacity: 0,
            translateZ: -200,
            translateY: -60
        }, 0);

        return $('main').velocity({
            opacity: 1
        }, 0);

    },
    loadIn: function(delay) {
        var delayInc;
        if (delay == null) {
            delay = 0;
        }

        $world.velocity({
            opacity: 1,
            translateY: 0,
            translateZ: -200
        }, {
            duration: 1000,
            delay: delay,
            easing: 'spring'
        });

        anim.fadeInDir($heading, 300, delay + 600, 0, 30);
        anim.fadeInDir($subHeading, 300, delay + 800, 0, 30);
        anim.fadeInDir($teamListHome, 300, delay + 800, 0, 30);
        anim.fadeInDir($switcher, 300, delay + 900, 0, 30);
        delay += 1200;
        delayInc = 30;
        return anim.dropPlayers($playersHome, delay, delayInc);
    },
    startLoading: function() {
        var images, key, ref, val;
        anim.fadeInDir($loading, 300, 0, 0, -20);
        images = [];
        ref = data.players.home && data.players.away;
        for (key in ref) {
            val = ref[key];
            images.push(ASSET_URL + val.asset);
        }
        return dom.preloadImages(images);
    },
    endLoading: function() {
        return anim.fadeOutDir($loading, 300, 1000, 0, -20);
    },
    arrangePlayers: function() {
        return $players.each(function() {
            var $el;
            $el = $(this);
            return $el.velocity({
                translateX: parseInt($el.attr('data-x')),
                translateZ: parseInt($el.attr('data-y'))
            });
        });
    },
    focusPlayer: function($el) {
        var shiftY;
        data = $el.data();
        shiftY = data.y;
        if (shiftY > 0) {
            shiftY = data.y / 2;
        }
        $('.js-player[data-side="' + state.curSide() + '"]').not('.active').each(function() {
            var $unfocus;
            $unfocus = $(this);
            return anim.fadeOutDir($unfocus, 300, 0, 0, 0, 0, null, 0.2);
        });
        $world.velocity({
            translateX: pos.world.baseX - data.x,
            translateY: pos.world.baseY,
            translateZ: pos.world.baseZ - shiftY
        }, 600);
        $terrain.velocity({
            opacity: 0.66
        }, 600);
        return this.showPlayerCard($el, 600, 600);
    },
    unfocusPlayer: function() {
        var $el;
        $el = $('.js-player.active');
        data = $el.data();
        anim.fadeInDir($('.js-player[data-side="' + state.curSide() + '"]').not('.active'), 300, 300, 0, 0, 0, null, 0.2);
        $el.removeClass('active');
        $world.velocity({
            translateX: pos.world.baseX,
            translateY: pos.world.baseY,
            translateZ: pos.world.baseZ
        }, 600);
        $terrain.velocity({
            opacity: 1
        }, 600);
        return this.hidePlayerCard($el, 600, 600);
    },
    hidePlayerCard: function($el, dur, delay) {
        var $card, $image;
        $card = $el.find('.player__card');
        $image = $el.find('.player__img');
        $image.velocity({
            translateY: 0
        }, 300);
        anim.fadeInDir($el.find('.player__label', 200, delay));
        return anim.fadeOutDir($card, 300, 0, 0, -100);
    },
    showPlayerCard: function($el, dur, delay) {
        var $card, $image;
        $card = $el.find('.player__card');
        $image = $el.find('.player__img');
        $image.velocity({
            translateY: '-=150px'
        }, 300);
        anim.fadeOutDir($el.find('.player__label', 200, delay));
        return anim.fadeInDir($card, 300, 200, 0, 100);
    },
    switchSides: function() {
        var $new, $old, delay, delayInc;
        delay = 0;
        delayInc = 20;
        $old = $playersHome;
        $new = $playersAway;
        if (!state.home) {
            $old = $playersAway;
            $new = $playersHome;
        }
        state.swapSides();
        $old.each(function() {
            var $el;
            $el = $(this);
            anim.fadeOutDir($el, 200, delay, 0, -60, 0);
            anim.fadeOutDir($el.find('.player__label'), 200, delay + 700);
            return delay += delayInc;
        });
        $terrain.velocity({
            rotateY: '+=180deg'
        }, {
            delay: 150,
            duration: 1200
        });
        return anim.dropPlayers($new, 1500, 30);
    }
};

var anim = {
    fadeInDir: function($el, dur, delay, deltaX, deltaY, deltaZ, easing, opacity) {
        if (deltaX == null) {
            deltaX = 0;
        }
        if (deltaY == null) {
            deltaY = 0;
        }
        if (deltaZ == null) {
            deltaZ = 0;
        }
        if (easing == null) {
            easing = null;
        }
        if (opacity == null) {
            opacity = 0;
        }
        $el.css('display', 'block');
        $el.velocity({
            translateX: '-=' + deltaX,
            translateY: '-=' + deltaY,
            translateZ: '-=' + deltaZ
        }, 0);
        return $el.velocity({
            opacity: 1,
            translateX: '+=' + deltaX,
            translateY: '+=' + deltaY,
            translateZ: '+=' + deltaZ
        }, {
            easing: easing,
            delay: delay,
            duration: dur
        });
    },
    fadeOutDir: function($el, dur, delay, deltaX, deltaY, deltaZ, easing, opacity) {
        var display;
        if (deltaX == null) {
            deltaX = 0;
        }
        if (deltaY == null) {
            deltaY = 0;
        }
        if (deltaZ == null) {
            deltaZ = 0;
        }
        if (easing == null) {
            easing = null;
        }
        if (opacity == null) {
            opacity = 0;
        }
        if (!opacity) {
            display = 'none';
        } else {
            display = 'block';
        }
        return $el.velocity({
            opacity: opacity,
            translateX: '+=' + deltaX,
            translateY: '+=' + deltaY,
            translateZ: '+=' + deltaZ
        }, {
            easing: easing,
            delay: delay,
            duration: dur
        }).velocity({
            opacity: opacity,
            translateX: '-=' + deltaX,
            translateY: '-=' + deltaY,
            translateZ: '-=' + deltaZ
        }, {
            duration: 0,
            display: display
        });
    },
    dropPlayers: function($els, delay, delayInc) {
        return $els.each(function() {
            var $el;
            $el = $(this);
            $el.css({
                display: 'block',
                opacity: 0
            });
            anim.fadeInDir($el, 800, delay, 0, 50, 0, 'spring');
            anim.fadeInDir($el.find('.player__label'), 200, delay + 250);
            return delay += delayInc;
        });
    }
};

var assignVariables = function() {
    $stage = $('.js-stage');
    $world = $('.js-world');
    $switchBtn = $('.js-switch');
    $loadBtn = $('.js-load');
    $heading = $('.js-heading');
    $switcher = $('.js-switcher');
    $closeBtn = $('.js-close');
    $subHeading = $('.js-subheading');
    $terrain = $('.js-terrain');
    $team = $('.js-team');
    $teamListHome = $('.js-team-home');
    $loading = $('.js-loading');
}

var init = function() {

    $.getJSON('/assets/data.json', function(_data) {
        data = _data;

        assignVariables();
        dom.addPlayers('home');
        dom.addPlayers('away');
        scenes.preLoad();
        scenes.arrangePlayers();
        events.attachAll();
        return scenes.startLoading();
    });

    
};

$(document).ready(function() {
    init();
});
