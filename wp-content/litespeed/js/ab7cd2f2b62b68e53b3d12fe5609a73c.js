jQuery(function(s){var n=s(document).find(ywdpd_qty_args.column_product_info_class+" #ywdpd-quantity-table"),d=function(t,n){var d=!1;if((d=t.length?t.parents("#ywdpd-quantity-table"):s(document).find(ywdpd_qty_args.column_product_info_class+" #ywdpd-quantity-table"))&&d.length){var i=!1,a=!1,e=!1;if(d.hasClass("horizontal")?t.hasClass("qty-info")?(i=t,a=d.find("td.qty-price-info").get(t.index()-1),e=d.find("td.qty-discount-info").get(t.index()-1),a=s(a),e=s(e)):t.hasClass("qty-price-info")?(a=t,i=d.find("td.qty-info").get(t.index()-1),e=d.find("td.qty-discount-info").get(t.index()-1),i=s(i),e=s(e)):(e=t,i=d.find("td.qty-info").get(t.index()-1),a=d.find("td.qty-price-info").get(t.index()-1),i=s(i),a=s(a)):t.hasClass("qty-info")?(a=(i=t).parent().find("td.qty-price-info"),e=t.parent().find("td.qty-discount-info")):t.hasClass("qty-price-info")?(i=(a=t).parent().find("td.qty-info"),e=t.parent().find("td.qty-discount-info")):(i=(e=t).parent().find("td.qty-info"),a=t.parent().find("td.qty-price-info")),d.find("td").removeClass("ywdpd_active"),"variable"!==d.data("product_type")){var d=t.length?i.data("formatted_price"):d.data("price_html"),r="";if(""!==d){if(s(ywdpd_qty_args.column_product_info_class).parents(".yith-quick-view-content").length)r=".yith-quick-view-content ";r=s(r+ywdpd_qty_args.column_product_info_class);if(!r.find(".woocommerce-variation-price").length)r.find(ywdpd_qty_args.product_price_classes).html(d);else{r=r.find(".woocommerce-variation-price .price");r.html(d)}s(document).trigger("ywdpd_price_html_updated",[d])}}if(t.length&&(i.addClass("ywdpd_active"),a.addClass("ywdpd_active"),e.length&&e.addClass("ywdpd_active")),n){r=i,d=1;if(r.length)d="*"!==r.data("qtymax")&&!ywdpd_qty_args.select_minimum_quantity?r.data("qtymax"):r.data("qtymin");s(document).find("form.cart .qty").val(d)}}},i=function(){var t;"yes"===ywdpd_qty_args.is_default_qty_enabled&&(t=s(document).find("#ywdpd-quantity-table"),("yes"===ywdpd_qty_args.show_minimum_price?t.find("td.qty-price-info").last():t.find("td.qty-price-info").first()).trigger("click"))},a=(s(document).on("click","#ywdpd-quantity-table td",function(t){t.preventDefault(),d(s(this),!0)}),function(){var t,n=parseInt(s(this).val());"yes"===ywdpd_qty_args.is_change_qty_enabled&&0<n&&(t=s(this).parents(ywdpd_qty_args.column_product_info_class).find("#ywdpd-quantity-table").find("td.qty-info").filter(function(){return"*"!==s(this).data("qtymax")?s(this).data("qtymin")<=n&&s(this).data("qtymax")>=n:s(this).data("qtymin")<=n}),d(t,!1))});s(document).on("change","form.cart .qty",a),i(),s(ywdpd_qty_args.variation_form_class).on("check_variations",function(){s(document).off("change","form.cart .qty")}).on("found_variation",function(t,n){var d=s(this).parents(ywdpd_qty_args.column_product_info_class).find(".ywdpd-table-discounts-wrapper");(d=d.length?d:s(this).closest(".ywdpd-table-discounts-wrapper")).replaceWith(n.table_price),i(),s(document).find("form.cart .qty").on("change",a).trigger("change")}).on("reset_data",function(){var t=s(this).parents(ywdpd_qty_args.column_product_info_class).find(".ywdpd-table-discounts-wrapper");t.length||(t=s(this).closest(".ywdpd-table-discounts-wrapper")),"yes"===ywdpd_qty_args.show_variable_table?(t.html(n),i()):t.hide()})})
;