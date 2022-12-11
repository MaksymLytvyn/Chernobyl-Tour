$(document).ready(function($) {
    let itemtype = "item-1";
    $(".item-type").click(function() {
        $(".item-type").removeClass("item-type-active");
        $(this).addClass("item-type-active");
        itemtype = $(this).data("id");
        $(".calc-count").text($(".calc-range").val());
        rangeCalc($(".calc-range").val());
    });
    function rangeCalc(i) {
        let totalPrice = 0;
        let tariff = {
            "item-1": [
                {
                    "begin": 1,
                    "price": 750
                },
                {
                    "begin": 3,
                    "price": 700
                },
                {
                    "begin": 6,
                    "price": 650
                },
                {
                    "begin": 11,
                    "price": 600
                },
                {
                    "begin": 21,
                    "price": 550
                },
                {
                    "begin": 50,
                    "price": 500
                }
            ],
            "item-2": [
                {
                    "begin": 1,
                    "price": 850
                },
                {
                    "begin": 3,
                    "price": 800
                },
                {
                    "begin": 6,
                    "price": 750
                },
                {
                    "begin": 11,
                    "price": 700
                },
                {
                    "begin": 21,
                    "price": 650
                },
                {
                    "begin": 61,
                    "price": 600
                }
            ],
            "item-3": [
                {
                    "begin": 1,
                    "price": 1200
                },
                {
                    "begin": 3,
                    "price": 1150
                },
                {
                    "begin": 6,
                    "price": 1100
                },
                {
                    "begin": 11,
                    "price": 1050
                },
                {
                    "begin": 21,
                    "price": 1000
                },
                {
                    "begin": 50,
                    "price": 950
                }
            ]
        };
        tariff[itemtype].forEach(function(num, item) {
            if (tariff[itemtype][item].begin <= i) {
                totalPrice = tariff[itemtype][item].price;
                $(".calc-total-price").text(i * totalPrice);
                $(".calc-price").text(totalPrice);
            }
        //console.log(tariff[item].begin);
        });
    }
    $(".calc-range").on("input", function() {
        $(".calc-count").text(this.value);
        rangeCalc(this.value);
    });
//rangeCalc();
});

//# sourceMappingURL=index.a6d2c788.js.map
