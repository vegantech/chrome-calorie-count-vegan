var $j = jQuery.noConflict();
$j('body').css('background-image','none');
$j('iframe').remove();
if ($j('#extended_magic_field_shawn').length == 0) {
  $j('#topsearchform').append('<input id="extended_magic_field_shawn" type="hidden" name="recipe_extended" value="1">');
};
