

 /* ---- /css/components.css ---- */ 

/*
Editing instructions :

- Only place admin interface component related styling here
- Front end components should only be minimally styled (No colors. Minimal Relative dimensions and positions)
- Each selector must have at least 2 elements
- The first element in each selector must be the component identifier
- Layout specific css must go into components.css file in the layout's folder
@todo Separate base layout and colors to different css files

*/

.component_report_data table,
.component_report_data table th,
.component_report_data table td {
    border: 1px solid black;
    border-collapse: collapse;
}

.component_cngchange_log table td {
    max-width: 300px;
    word-wrap: break-word;
}

.component_cross_reference_report .filter_attributes .field,
.component_cross_reference_report .manual_date_selection,
.component_cross_reference_report .date_selection .field {
    display: inline-block;
}

.component_cross_reference_report .error {
    border: 2px solid red;
}

.component_cross_reference_report_data table td {
    padding: 3px;
}

.component_cross_reference_report_data {
    max-width: 1000px;
    width: 1000px;
    overflow: auto;
    border: 1px solid black;
}

.component_admin_toolbar {
    display: none; /* Hidden by default */
    background-color: #595959;
    opacity: 0.96;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-width: 30px;
    border-right: 2px solid #363636;
}

.component_admin_toolbar .toolbar_item {
    opacity: 1;
    background-color: white;
    border: 1px solid black;
    margin: 3px;
    padding: 3px;
    font-weight: bold;
}

.component_admin_toolbar .toolbar_item.promotional_save_sort_order {
    background-color: #fffacd;

}

.component_help,
.component_help_index {
    min-width: 400px;
    min-height: 400px;
}

.component_help_index .items {
    margin-left: 0;
    padding-left: 0;
    max-height: 350px;
}

.component_help_index .items .odd {
    background-color: #faebd7;
}

.component_help_index .items .disabled {
    background-color: #CCCCCC;
}

.component_help_index .items .disabled:after {
    content: 'disabled';
    float: right;
    font-weight: bold;
}

.component_help_index .items li {
    padding: 2px;
    list-style: none;
}

.component_help_index .items a {
    text-decoration: underline;
}

.component_help .actions {
    float: right;
}

.component_help .form_builder.help_item .mandatory {
    color: red;
}

.component_help_index .actions {
    padding-left: 0;
    margin-left: 0;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.component_help_index .actions li {
    display: inline-block;
    list-style: none;
    background-color: #96c8c1;
    font-weight: bold;
    padding: 3px;
}

.component_help .form_builder .field.view_only .input,
.component_help .form_builder .field.editable_view .input {
    display: none;
}

.component_help .form_builder .field .view_only {
    min-height: 1em;
    min-width: 15em;
    cursor: text;
}

.component_help .form_builder .field_id_is_active_container {
    position: absolute;
    right: 0;
    top: 0;
}

.component_help .form_builder .field .view_only.is_empty {
    border: 1px solid black;
}

.component_help .form_builder .field_id_title_container {
    font-size: 1.5em;
    font-weight: bold;
}

.component_help .form_builder .field_id_title_container label:after {
    content: ':';
}

.component_help .form_builder .textarea_field .mandatory {
    padding-left: 10px;
    display: none;

}

.component_help .form_builder .textarea_field label {
    text-decoration: underline;
    font-size: 1.5em;
    font-weight: bold;
}

.component_help .form_builder .field.editable_view:hover .view_only:before {
    content: 'Click to edit';
    position: absolute;
    top: 0;
    left: 0;
    color: blue;
    font-size: 12px;
    font-weight: normal;
    border: 1px solid black;
    background-color: white;
}

.component_help .form_builder .textarea_field .view_only,
.component_help .form_builder .textarea_field textarea {
    min-height: 10em;
    min-width: 36em;
}

.component_help .form_builder .text_field.editable_view .view_only {
    display: inline-block;
}

.component_help .form_builder .actions {
    display: none;
}

.component_help .textarea_field .view_only {
    white-space: pre-wrap;
    max-width: 400px;
}

.component_promotional_product_settings h3 {
    margin-bottom: 10px;
}

.component_promotional_product_settings .product_image {
    float: left;
}

.component_promotional_product_settings .promotional_product_settings {
    float: right;
}

.component_promotional_products .promotional_image {
    float: left;
    margin: 5px 15px 0 30px;
    border: 1px solid black;
    height: 130px;
    width: 130px;
}

.component_promotional_products .promotional_product_all {
    position: relative;
}

.component_promotional_products .promotional_product .promoframe,
.component_promotional_products .promotional_product .product_image {
    display: block;
}

.component_promotional_products .promotional_product_all .admin_message {
    position: absolute;
    width: 6em;
    border: 1px solid black;
    top: 100px;
    background-color: #fafad2;
    font-weight: bold;
    color: black;
    padding: 2px;
}

.component_promotional_products .promotional_product_all .visible_on_homepage {
    right: 3px;
}

.component_promotional_products .promotional_product_all .featured {
    left: 3px;
    background-color: #CCEFF1;
}

/* portal version */

.component_promotional_products_portal .promotional_image {
    float: left;
    margin: 5px 15px 0 30px;
    border: 1px solid black;
    height: 130px;
    width: 130px;
}

.component_promotional_products_portal .promotional_product_all {
    position: relative;
}

.component_promotional_products_portal .promotional_product .promoframe,
.component_promotional_products_portal .promotional_product .product_image {
    display: block;
}

.component_promotional_products_portal .promotional_product_all .admin_message {
    position: absolute;
    width: 6em;
    border: 1px solid black;
    top: 100px;
    background-color: #fafad2;
    font-weight: bold;
    color: black;
    padding: 2px;
}

.component_promotional_products_portal .promotional_product_all .visible_on_homepage {
    right: 3px;
}

.component_promotional_products_portal .promotional_product_all .featured {
    left: 3px;
    background-color: #CCEFF1;
}

/* -------------------- */

.component_cngoperator_match_parameters {
    clear: both;
    margin: 5px 0;
    padding: 2px;
}

.component_cngoperator_match_parameters .title {
    padding: 3px;
    text-decoration: underline;
    font-weight: normal;
}

.component_cngoperator_match_parameters .title .label {
    font-weight: bold;
}

.component_cngoperator_match_parameters .operator_match_value_group {
    display: inline-block;
    border: 1px solid black;
    padding: 2px;
    width: 48%;
    vertical-align: top;
}

.component_cngoperator_match_parameters .remove,
.component_cngoperator_match_parameters .item_note,
.component_cngoperator_match_parameters .note {
    display: none;
}

.component_field_value_selector .field_id,
.component_field_value_db_lookup_selector .field_id {
    width: 100%;
}

.component_field_value_selector td,
.component_field_value_db_lookup_selector td,
.component_field_value_selector tr,
.component_field_value_db_lookup_selector tr,
.component_field_value_selector th,
.component_field_value_db_lookup_selector th {
    border: 1px solid black;
}

.component_field_value_selector table,
.component_field_value_db_lookup_selector table {
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
}

.component_import_filter_editor {
    padding: 2em;
    max-width: 600px;
}

.component_import_filter_editor .errors {
    color: red;
    float: right;
}

.component_import_filter_editor .item {
    padding: 10px 20px;
    background: #eee;
    border-top: 1px solid #ccc;
    width: 50em;
}

.component_import_filter_editor .properties {
    padding: 0;
    margin: 0;
}

.component_import_filter_editor .properties li {
    border-bottom: 1px solid black;
    list-style: none;
    padding: 6px 0;
}

.component_import_filter_editor h1 {
    margin: 2px 0;
}

.component_import_filter_editor .item_toggle {
    white-space: nowrap;
}

.component_import_filter_editor .item .comment {
    min-width: 18em;
}

.component_import_filter_editor table {
    border-collapse: collapse;
}

.component_import_filter_editor table td,
.component_import_filter_editor table th {
    border: 1px solid black;
}

.component_import_filter_editor .item .code,
.component_import_filter_editor .item .name {
    padding: 0 4px;
}

.component_import_filter_editor .item .comment .editable {
    display: none;
}

.component_import_filter_editor .item.enabled .comment .editable {
    display: inline;
}

.component_import_filter_editor .item .edit_note {
    background: url('images/note_edit.png') 24px 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: default;
}

.component_import_filter_editor .item.enabled .edit_note {
    background-position: 48px 0;
    cursor: pointer
}

.component_import_filter_editor .item.enabled.has_note .edit_note {
    background-position: 0 0;
    cursor: pointer
}

.component_import_filter_editor .main_comment h2 {
    font-weight: normal;
    font-size: 10px;
}

.component_import_filter_editor th.item_note {
    width: 24px;
}

.component_import_filter_editor .item .select {
    min-width: 32px;
}

.component_import_filter_editor .field_editors {
    margin-left: 0;
    padding-left: 0;
}

.component_import_filter_editor .field_editors .field_editor {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
}

.component_import_filter_editor .field_editors .field_editor .remove {
    width: 20px;
    height: 17px;
    color: transparent;
    background: transparent url(images/ui-icons_cd0a0a_256x240.png) -94px -127px;
    border: 0;
}

/** End import filter editor */

.component_comment_editor textarea {
    width: 100%;
    min-width: 350px;
}

.component_comment_editor .info ul {
    margin: 0;
    padding: 0;
}

.component_comment_editor .comment .info li {
    display: inline-block;
}

.component_menu .hidden_link a {
    cursor: text;
}

.component_cmsattachment .cms_valid {
    background-color: #7FFFA8;
}

.component_cmsattachment .cms_invalid {
    background-color: #FFDCCB;
}

.component_cng_artifact .component_pfcsegment_editor {
    padding: 5px 15px 20px;
    border: 1px solid black;
    display: inline-block;
    height: 220px;
    overflow: hidden;
    background-color: white;
    margin: 0 10px 10px 0;
}

.component_cng_artifact .segment .actions {
    float: right;
    margin: 0;
    padding: 0;
}

.component_cng_artifact .segment .actions input {
    color: transparent;
    background: none;
}

.component_cng_artifact .segment .actions .remove {
    background: url("images/cross.gif") no-repeat;
    border: 0;
    width: 20px;
}

.component_cng_artifact .segment select {
    font-size: 11px;
}

.component_cng_artifact .segment .actions .append {
    background: url("images/add.png") no-repeat;
    border: 0;
    width: 20px;
}

.component_cng_artifact .segment .field {
    white-space: nowrap;
}

.component_cng_artifact .component_single_product_field_selector {
    display: inline;
}

.component_cng_artifact .segment .stage.field,
.component_cng_artifact .segment .sort_method.field {
    display: inline-block;
}

.component_cng_artifact .segment .answers td,
.component_cng_artifact .segment th {
    border: 1px solid gray;
    empty-cells: show;
    width: 50px;
}

.component_cng_artifact .segment .answers .odd {
    background: #eed;
}

.component_cng_artifact .group_association {
    font-weight: normal;
}

.component_cng_artifact .tablesort {
    border: 1px solid gray;
    border-collapse: collapse;
}

.component_cng_artifact .pcc_header {
    text-align: center;
}

.component_cng_artifact .segment .instructions {
    display: none;
}

.component_cng_artifact .segment.separator .instructions.separator {
    display: block;
}

.component_cng_artifact .full_code_sample_container {
    border: 1px solid gray;
    padding: 2px;
    margin: 5px 0;
    font-size: 2em;
    background-color: #C1C1BF;
    font-weight: bold;
    min-height: 28px;
}

.component_cng_artifact .segment_text_container {
    display: none;
}

.component_cng_artifact .action_preview {
    float: right;
}

.component_cng_artifact .actions {
    margin: 10px 0;
}

.component_cng_artifact .sample_code {
    border-top: 1px solid black;
    font-size: 1em;
    font-weight: normal;
}

.component_cng_artifact .new_answer {
    color: green;
    font-weight: bold;
}

.component_cng_artifact .segment.stage .instructions.separator,
.component_cng_artifact .segment.stage .text,
.component_cng_artifact .segment.stage .sort_field,
.component_cng_artifact .segment.route .instructions.separator,
.component_cng_artifact .segment.route .text,
.component_cng_artifact .segment.text .stage,
.component_cng_artifact .segment.text .sort_field,
.component_cng_artifact .segment.text .instructions.separator,
.component_cng_artifact .segment.text .using_field_exception,
.component_cng_artifact .segment.separator .stage,
.component_cng_artifact .segment.separator .using_field_exception,
.component_cng_artifact .segment.separator .sort_field {
    display: none;
}

.component_cng_filter .segment .append,
.component_cng_filter h2.sample_code,
.component_cng_filter .segment .remove {
    display: none;
}

.component_cng_filter .field_selector {
    display: none;
}

.component_system_settings fieldset {
    width: 45%;
    display: table-cell;
    height: 280px;
    float: left;
    margin-bottom: 10px;
}

.component_system_settings legend {
    font-size: 1.5em;
    padding: 0 10px;
}

.component_system_settings .text_field label,
.component_system_settings .checkbox_field label,
.component_system_settings .selection_field label {
    position: relative;
    top: 4px;
}

.component_system_settings label {
    white-space: normal;
}

.component_system_settings .mandatory {
    color: red;
    font-weight: bold;
    position: relative;
    left: -4px;
    top: 4px;
}

.component_system_settings .actions {
    clear: left;
}

.component_system_settings .errors {
    background-color: #ffdddd;
    font-size: 1.5em;
    padding: 5px;
    border: 1px solid black;
    margin-bottom: 15px;
}

.component_system_settings .errors h5,
.component_system_settings .errors ul {
    margin: 0;
}

.component_system_settings .field {
    padding-bottom: 9px;
    border-bottom: 1px solid #e5e5e5;
}

.component_system_settings .text_field .field_name {
    max-width: 312px;
    display: inline-block;
}

.component_system_settings .selection_field .input,
.component_system_settings .text_field .input {
    float: right;
}

.component_system_settings .has_errors {
    background-color: #ffdddd;
}

.module_settings #outer_wrapper #inner_wrapper #all_content #page_content {
    width: auto;
}

.module_admincatalogue .component_duplicate_nameblocks .odd {
    background-color: #f0f0f0;
}

.module_admincatalogue .component_duplicate_nameblocks th {
    padding: 5px;
    text-align: left;
}

.module_admincatalogue .component_duplicate_nameblocks tr:hover {
    background-color: #9acd32;
}

.module_admincatalogue .component_duplicate_nameblocks td {
    padding: 2px;
    min-width: 70px;
}

.component_cnglist .cng_list_item td {
    height: 1.5em;
    padding: 5px;
}

.component_cnglist .cng_list_item.odd {
    background-color: #e5e1d6;
}

.component_cnglist .cng_list_item:hover {
    outline: 1px solid black;
}

.component_pcc_editor .component_pfclabel_selector {
    float: right;
}

.component_pfclabel_selector {
    border: 1px solid black;
    padding: 5px;
    background-color: white;
}

.component_pfclabel_selector .labels {
    display: none;
    margin: 10px 10px 0 0;
    padding: 0;
    list-style: none;
}

.component_pfclabel_selector .select_labels {
    margin: 0;
    padding: 0;
    font-size: 11px;
    text-align: right;
}

#component_standard_products_cng_indicator {
    display: none;
}

.component_pcc_editor .default_field_change_alert {
    color: red;
    line-height: 20px;
    display: none;
}

select[name="segment[using_field][]"] {
    width: 239px;
}

div.componens_contacts .selection_field .input select,
div.componens_system_managers .selection_field .input select {
    width: 210px;
}

.component_tags_selection_filter a.selected {
    font-weight: bold;
}

.component_tags_selection_filter li.list_view {
    display: block;
}

.component_tags_selection_filter li.list_view .remove_all_filters {
    float: none;
}

.component_tags_management li.tag_family {
    list-style: none;
}

.component_tags_management .error {
    color: red;
}

/*
* Imported Products
*/
.imported_table tr:hover {
    background-color: #C7C5C6;
}

.imported_table td, .imported_table th {
    padding-left: 5px;
    padding-right: 5px;
    border-right: 1px black solid;
    border-bottom: 1px black solid;
}

.imported-vert-scroll {
    width: 100%;
    overflow: scroll;
    max-height: 250px;
}

#imported-content {
    width: 995px;
}

/*
.imported-edit-selected{
    float: right;
}
.imported_group_name{
    float: left;
}*/

.cng_multiselect_dropdown .sieve {
    float: left;
    background: #ffffff url('images/filter.png') no-repeat 183px center;
    background: url('images/filter.png') no-repeat 183px center, -webkit-gradient(linear, 0 0, 0 100%, color-stop(1%, #eeeeee), color-stop(15%, #ffffff));
    background: url('images/filter.png') no-repeat 183px center,  -webkit-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 183px center, -moz-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 183px center, -o-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 183px center, linear-gradient(#eeeeee 1%, #ffffff 15%);
    border: 1px solid #AAAAAA;
    font-family: sans-serif;
    font-size: 1em;
    margin: 1px 0 5px 0;
    outline: 0 none;
    padding: 4px 20px 4px 5px;
    height: 17px;
    width: 173px;
}
.dir_rtl .cng_multiselect_dropdown .sieve {
    padding: 4px 5px 4px 20px;
    background: #ffffff url('images/filter.png') no-repeat 5px center;
    background: url('images/filter.png') no-repeat 5px center, -webkit-gradient(linear, 0 0, 0 100%, color-stop(1%, #eeeeee), color-stop(15%, #ffffff));
    background: url('images/filter.png') no-repeat 5px center,  -webkit-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 5px center, -moz-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 5px center, -o-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/filter.png') no-repeat 5px center, linear-gradient(#eeeeee 1%, #ffffff 15%);
}
body.dir_rtl.cng_multiselect_dropdown .sieve {
    float: right;
}

/* CNG filter drop down */
.configurator .chzn-container .chzn-results,
.configurator .product_nameblock_controls .chzn-container .chzn-single {
    width: 200px;
}

.configurator .product_nameblock_controls .chzn-container-single .chzn-drop {
    /*min-width: 208px;*/
    width: auto !important;
}
.configurator .product_nameblock_controls .chzn-container-single .chzn-search input {
    min-width: 173px;
}

.dir_rtl.nameblock_selector .product_nameblock_controls .chzn-container-single .chzn-search input,
.dir_rtl.configurator .product_nameblock_controls .chzn-container-single .chzn-search input {
    background: #fff url('images/chosen-sprite.png') no-repeat -31px -20px;
    background: url('images/chosen-sprite.png') no-repeat -31px -20px, -webkit-gradient(linear, 0 0, 0 100%, color-stop(1%, #eeeeee), color-stop(15%, #ffffff));
    background: url('images/chosen-sprite.png') no-repeat -31px -20px, -webkit-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/chosen-sprite.png') no-repeat -31px -20px, -moz-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/chosen-sprite.png') no-repeat -31px -20px, -o-linear-gradient(top, #eeeeee 1%, #ffffff 15%);
    background: url('images/chosen-sprite.png') no-repeat -31px -20px, linear-gradient(#eeeeee 1%, #ffffff 15%);
    padding: 4px 5px 4px 20px;
}
.configurator .product_nameblock_controls .chzn-container {
    font-size: 12px;
    min-width: 210px;
}

.nameblock_selector.dir_rtl .product_nameblock_controls .chzn-container ,
.configurator.dir_rtl .product_nameblock_controls .chzn-container {
    float: right;
}

.nameblock_selector .product_nameblock_controls .chzn-container-single .chzn-single span,
.configurator .product_nameblock_controls .chzn-container-single .chzn-single span {
    font-size: 12px;
}

.nameblock_selector.dir_rtl .product_nameblock_controls .chzn-container,
.configurator.dir_rtl .product_nameblock_controls .chzn-container {
    text-align: right;
}

.nameblock_selector.dir_rtl .product_nameblock_controls .chzn-container-single .chzn-single span,
.configurator.dir_rtl .product_nameblock_controls .chzn-container-single .chzn-single span
{
    margin-left: 26px;
    margin-right: 0;
}

.nameblock_selector.dir_rtl .product_nameblock_controls .chzn-container a.chzn-single,
.configurator.dir_rtl .product_nameblock_controls .chzn-container a.chzn-single{
    padding-left: 0;
    padding-right: 8px;
}

.nameblock_selector.dir_rtl .product_nameblock_controls .chzn-container-single .chzn-single div,
.configurator.dir_rtl .product_nameblock_controls .chzn-container-single .chzn-single div
{
    right: 184px;
}

.module_settings. div.field_id_log_mode_container {
    margin-left: 12px;
    margin-right: 0;

}
.module_settings.dir_rtl div.field_id_log_mode_container {
    margin-left: 0;
    margin-right: 12px;
}

 /* ---- /css/jquery.selectBox.css ---- */ 

/* Dropdown control */
.selectBox-dropdown {
    min-width: 150px;
    position: relative;
    border: solid 1px #BBB;
    line-height: 1.5;
    text-decoration: none;
    text-align: left;
    color: #000;
    outline: none;
    vertical-align: middle;
    background: #F2F2F2;
    background: -moz-linear-gradient(top, #F8F8F8 1%, #E1E1E1 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #F8F8F8), color-stop(100%, #E1E1E1));
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F8F8F8', endColorstr='#E1E1E1', GradientType=0);
    -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .75);
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .75);
    box-shadow: 0 1px 0 rgba(255, 255, 255, .75);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    display: inline-block;
    cursor: default;
}

.selectBox-dropdown:focus,
.selectBox-dropdown:focus .selectBox-arrow {
    border-color: #666;
}

.selectBox-dropdown.selectBox-menuShowing {
    -moz-border-radius-bottomleft: 0;
    -moz-border-radius-bottomright: 0;
    -webkit-border-bottom-left-radius: 0;
    -webkit-border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.selectBox-dropdown .selectBox-label {
    padding: 2px 8px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
}

.selectBox-dropdown .selectBox-arrow {
    position: absolute;
    top: 0;
    right: 0;
    width: 23px;
    height: 100%;
    background: url('images/jquery.selectBox-arrow.gif') 50% center no-repeat;
    border-left: solid 1px #BBB;
}


/* Dropdown menu */
.selectBox-dropdown-menu {
    position: absolute;
    z-index: 99999;
    max-height: 200px;
    min-height: 1em;
    border: solid 1px #BBB; /* should be the same border width as .selectBox-dropdown */
    background: #FFF;
    -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
    box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
    overflow: auto;
}


/* Inline control */
.selectBox-inline {
    min-width: 150px;
    outline: none;
    border: solid 1px #BBB;
    background: #FFF;
    display: inline-block;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    overflow: auto;
}

.selectBox-inline:focus {
    border-color: #666;
}


/* Options */
.selectBox-options,
.selectBox-options LI,
.selectBox-options LI A {
    list-style: none;
    display: block;
    cursor: default;
    padding: 0;
    margin: 0;
}

.selectBox-options LI A {
    line-height: 1.5;
    padding: 0 .5em;
    white-space: nowrap;
    overflow: hidden;
    background: 6px center no-repeat;
}

.selectBox-options LI.selectBox-hover A {
    background-color: #EEE;
}

.selectBox-options LI.selectBox-disabled A {
    color: #888;
    background-color: transparent;
}

.selectBox-options LI.selectBox-selected A {
    background-color: #C8DEF4;
}

.selectBox-options .selectBox-optgroup {
    color: #666;
    background: #EEE;
    font-weight: bold;
    line-height: 1.5;
    padding: 0 .3em;
    white-space: nowrap;
}


/* Disabled state */
.selectBox.selectBox-disabled {
    color: #888 !important;
}

.selectBox-dropdown.selectBox-disabled .selectBox-arrow {
    opacity: .5;
    filter: alpha(opacity=50);
    border-color: #666;
}

.selectBox-inline.selectBox-disabled {
    color: #888 !important;
}

.selectBox-inline.selectBox-disabled .selectBox-options A {
    background-color: transparent !important;
}

 /* ---- /css/ui.dialog.css ---- */ 

/*
 * jQuery UI CSS Framework @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden { display: none; }
.ui-helper-hidden-accessible { position: absolute; left: -99999999px; }
.dir_rtl .ui-helper-hidden-accessible { left: 0; right: -99999999px; }
.ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }
.ui-helper-clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }
.ui-helper-clearfix { display: inline-block; }
/* required comment for clearfix to work in Opera \*/
* html .ui-helper-clearfix { height:1%; }
.ui-helper-clearfix { display:block; }
/* end clearfix */
.ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); }


/* Interaction Cues
----------------------------------*/
.ui-state-disabled { cursor: default !important; }


/* Icons
----------------------------------*/

/* states and images */
.ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; }


/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }


/*
 * jQuery UI CSS Framework @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 *
 * To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Lucida%20Grande,%20Lucida%20Sans,%20Arial,%20sans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=5px&bgColorHeader=5c9ccc&bgTextureHeader=12_gloss_wave.png&bgImgOpacityHeader=55&borderColorHeader=4297d7&fcHeader=ffffff&iconColorHeader=d8e7f3&bgColorContent=fcfdfd&bgTextureContent=06_inset_hard.png&bgImgOpacityContent=100&borderColorContent=a6c9e2&fcContent=222222&iconColorContent=469bdd&bgColorDefault=dfeffc&bgTextureDefault=02_glass.png&bgImgOpacityDefault=85&borderColorDefault=c5dbec&fcDefault=2e6e9e&iconColorDefault=6da8d5&bgColorHover=d0e5f5&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=79b7e7&fcHover=1d5987&iconColorHover=217bc0&bgColorActive=f5f8f9&bgTextureActive=06_inset_hard.png&bgImgOpacityActive=100&borderColorActive=79b7e7&fcActive=e17009&iconColorActive=f9bd01&bgColorHighlight=fbec88&bgTextureHighlight=01_flat.png&bgImgOpacityHighlight=55&borderColorHighlight=fad42e&fcHighlight=363636&iconColorHighlight=2e83ff&bgColorError=fef1ec&bgTextureError=02_glass.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=01_flat.png&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px
 */


/* Component containers
----------------------------------*/
.ui-widget { font-family: Lucida Grande, Lucida Sans, Arial, sans-serif; font-size: .9em; }
.ui-widget .ui-widget { font-size: 1em; }
.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: Lucida Grande, Lucida Sans, Arial, sans-serif; font-size: 1em; }
.ui-widget-content { border: 1px solid #a6c9e2; background: #fcfdfd url(images/ui-bg_inset-hard_100_fcfdfd_1x100.png) 50% bottom repeat-x; color: #222222; }
.ui-widget-content a { color: #222222; }
.ui-widget-header { border: 1px solid #4297d7; background: #5c9ccc url(images/ui-bg_gloss-wave_55_5c9ccc_500x100.png) 50% 50% repeat-x; color: #ffffff; font-weight: bold; }
.ui-widget-header a { color: #ffffff; }

/* Interaction states
----------------------------------*/
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { border: 1px solid #c5dbec; background: #dfeffc url(images/ui-bg_glass_85_dfeffc_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #2e6e9e; }
.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited { color: #2e6e9e; text-decoration: none; }
.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus { border: 1px solid #79b7e7; background: #d0e5f5 url(images/ui-bg_glass_75_d0e5f5_1x400.png) 50% 50% repeat-x; font-weight: bold; color: #1d5987; }
.ui-state-hover a, .ui-state-hover a:hover { color: #1d5987; text-decoration: none; }
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { border: 1px solid #79b7e7; background: #f5f8f9 url(images/ui-bg_inset-hard_100_f5f8f9_1x100.png) 50% 50% repeat-x; font-weight: bold; color: #e17009; }
.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited { color: #e17009; text-decoration: none; }
.ui-widget :active { outline: none; }

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight  {border: 1px solid #fad42e; background: #fbec88 url(images/ui-bg_flat_55_fbec88_40x100.png) 50% 50% repeat-x; color: #363636; }
.ui-state-highlight a, .ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a { color: #363636; }
.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error {border: 1px solid #cd0a0a; background: #fef1ec url(images/ui-bg_glass_95_fef1ec_1x400.png) 50% 50% repeat-x; color: #cd0a0a; }
.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a { color: #cd0a0a; }
.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text { color: #cd0a0a; }
.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary { font-weight: bold; }
.ui-priority-secondary, .ui-widget-content .ui-priority-secondary,  .ui-widget-header .ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; }
.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; }

/* Icons
----------------------------------*/

/* states and images */
.ui-icon { width: 16px; height: 16px; background-image: url(images/ui-icons_469bdd_256x240.png); }
.ui-widget-content .ui-icon {background-image: url(images/ui-icons_469bdd_256x240.png); }
.ui-widget-header .ui-icon {background-image: url(images/ui-icons_d8e7f3_256x240.png); }
.ui-state-default .ui-icon { background-image: url(images/ui-icons_6da8d5_256x240.png); }
.ui-state-hover .ui-icon, .ui-state-focus .ui-icon {background-image: url(images/ui-icons_217bc0_256x240.png); }
.ui-state-active .ui-icon {background-image: url(images/ui-icons_f9bd01_256x240.png); }
.ui-state-highlight .ui-icon {background-image: url(images/ui-icons_2e83ff_256x240.png); }
.ui-state-error .ui-icon, .ui-state-error-text .ui-icon {background-image: url(images/ui-icons_cd0a0a_256x240.png); }

/* positioning */
.ui-icon-carat-1-n { background-position: 0 0; }
.ui-icon-carat-1-ne { background-position: -16px 0; }
.ui-icon-carat-1-e { background-position: -32px 0; }
.ui-icon-carat-1-se { background-position: -48px 0; }
.ui-icon-carat-1-s { background-position: -64px 0; }
.ui-icon-carat-1-sw { background-position: -80px 0; }
.ui-icon-carat-1-w { background-position: -96px 0; }
.ui-icon-carat-1-nw { background-position: -112px 0; }
.ui-icon-carat-2-n-s { background-position: -128px 0; }
.ui-icon-carat-2-e-w { background-position: -144px 0; }
.ui-icon-triangle-1-n { background-position: 0 -16px; }
.ui-icon-triangle-1-ne { background-position: -16px -16px; }
.ui-icon-triangle-1-e { background-position: -32px -16px; }
.ui-icon-triangle-1-se { background-position: -48px -16px; }
.ui-icon-triangle-1-s { background-position: -64px -16px; }
.ui-icon-triangle-1-sw { background-position: -80px -16px; }
.ui-icon-triangle-1-w { background-position: -96px -16px; }
.ui-icon-triangle-1-nw { background-position: -112px -16px; }
.ui-icon-triangle-2-n-s { background-position: -128px -16px; }
.ui-icon-triangle-2-e-w { background-position: -144px -16px; }
.ui-icon-arrow-1-n { background-position: 0 -32px; }
.ui-icon-arrow-1-ne { background-position: -16px -32px; }
.ui-icon-arrow-1-e { background-position: -32px -32px; }
.ui-icon-arrow-1-se { background-position: -48px -32px; }
.ui-icon-arrow-1-s { background-position: -64px -32px; }
.ui-icon-arrow-1-sw { background-position: -80px -32px; }
.ui-icon-arrow-1-w { background-position: -96px -32px; }
.ui-icon-arrow-1-nw { background-position: -112px -32px; }
.ui-icon-arrow-2-n-s { background-position: -128px -32px; }
.ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
.ui-icon-arrow-2-e-w { background-position: -160px -32px; }
.ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
.ui-icon-arrowstop-1-n { background-position: -192px -32px; }
.ui-icon-arrowstop-1-e { background-position: -208px -32px; }
.ui-icon-arrowstop-1-s { background-position: -224px -32px; }
.ui-icon-arrowstop-1-w { background-position: -240px -32px; }
.ui-icon-arrowthick-1-n { background-position: 0 -48px; }
.ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
.ui-icon-arrowthick-1-e { background-position: -32px -48px; }
.ui-icon-arrowthick-1-se { background-position: -48px -48px; }
.ui-icon-arrowthick-1-s { background-position: -64px -48px; }
.ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
.ui-icon-arrowthick-1-w { background-position: -96px -48px; }
.ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
.ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
.ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
.ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
.ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
.ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
.ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
.ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
.ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
.ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
.ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
.ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
.ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
.ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
.ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
.ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
.ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
.ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
.ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
.ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
.ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
.ui-icon-arrow-4 { background-position: 0 -80px; }
.ui-icon-arrow-4-diag { background-position: -16px -80px; }
.ui-icon-extlink { background-position: -32px -80px; }
.ui-icon-newwin { background-position: -48px -80px; }
.ui-icon-refresh { background-position: -64px -80px; }
.ui-icon-shuffle { background-position: -80px -80px; }
.ui-icon-transfer-e-w { background-position: -96px -80px; }
.ui-icon-transferthick-e-w { background-position: -112px -80px; }
.ui-icon-folder-collapsed { background-position: 0 -96px; }
.ui-icon-folder-open { background-position: -16px -96px; }
.ui-icon-document { background-position: -32px -96px; }
.ui-icon-document-b { background-position: -48px -96px; }
.ui-icon-note { background-position: -64px -96px; }
.ui-icon-mail-closed { background-position: -80px -96px; }
.ui-icon-mail-open { background-position: -96px -96px; }
.ui-icon-suitcase { background-position: -112px -96px; }
.ui-icon-comment { background-position: -128px -96px; }
.ui-icon-person { background-position: -144px -96px; }
.ui-icon-print { background-position: -160px -96px; }
.ui-icon-trash { background-position: -176px -96px; }
.ui-icon-locked { background-position: -192px -96px; }
.ui-icon-unlocked { background-position: -208px -96px; }
.ui-icon-bookmark { background-position: -224px -96px; }
.ui-icon-tag { background-position: -240px -96px; }
.ui-icon-home { background-position: 0 -112px; }
.ui-icon-flag { background-position: -16px -112px; }
.ui-icon-calendar { background-position: -32px -112px; }
.ui-icon-cart { background-position: -48px -112px; }
.ui-icon-pencil { background-position: -64px -112px; }
.ui-icon-clock { background-position: -80px -112px; }
.ui-icon-disk { background-position: -96px -112px; }
.ui-icon-calculator { background-position: -112px -112px; }
.ui-icon-zoomin { background-position: -128px -112px; }
.ui-icon-zoomout { background-position: -144px -112px; }
.ui-icon-search { background-position: -160px -112px; }
.ui-icon-wrench { background-position: -176px -112px; }
.ui-icon-gear { background-position: -192px -112px; }
.ui-icon-heart { background-position: -208px -112px; }
.ui-icon-star { background-position: -224px -112px; }
.ui-icon-link { background-position: -240px -112px; }
.ui-icon-cancel { background-position: 0 -128px; }
.ui-icon-plus { background-position: -16px -128px; }
.ui-icon-plusthick { background-position: -32px -128px; }
.ui-icon-minus { background-position: -48px -128px; }
.ui-icon-minusthick { background-position: -64px -128px; }
.ui-icon-close { background-position: -80px -128px; }
.ui-icon-closethick { background-position: -96px -128px; }
.ui-icon-key { background-position: -112px -128px; }
.ui-icon-lightbulb { background-position: -128px -128px; }
.ui-icon-scissors { background-position: -144px -128px; }
.ui-icon-clipboard { background-position: -160px -128px; }
.ui-icon-copy { background-position: -176px -128px; }
.ui-icon-contact { background-position: -192px -128px; }
.ui-icon-image { background-position: -208px -128px; }
.ui-icon-video { background-position: -224px -128px; }
.ui-icon-script { background-position: -240px -128px; }
.ui-icon-alert { background-position: 0 -144px; }
.ui-icon-info { background-position: -16px -144px; }
.ui-icon-notice { background-position: -32px -144px; }
.ui-icon-help { background-position: -48px -144px; }
.ui-icon-check { background-position: -64px -144px; }
.ui-icon-bullet { background-position: -80px -144px; }
.ui-icon-radio-off { background-position: -96px -144px; }
.ui-icon-radio-on { background-position: -112px -144px; }
.ui-icon-pin-w { background-position: -128px -144px; }
.ui-icon-pin-s { background-position: -144px -144px; }
.ui-icon-play { background-position: 0 -160px; }
.ui-icon-pause { background-position: -16px -160px; }
.ui-icon-seek-next { background-position: -32px -160px; }
.ui-icon-seek-prev { background-position: -48px -160px; }
.ui-icon-seek-end { background-position: -64px -160px; }
.ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first { background-position: -80px -160px; }
.ui-icon-stop { background-position: -96px -160px; }
.ui-icon-eject { background-position: -112px -160px; }
.ui-icon-volume-off { background-position: -128px -160px; }
.ui-icon-volume-on { background-position: -144px -160px; }
.ui-icon-power { background-position: 0 -176px; }
.ui-icon-signal-diag { background-position: -16px -176px; }
.ui-icon-signal { background-position: -32px -176px; }
.ui-icon-battery-0 { background-position: -48px -176px; }
.ui-icon-battery-1 { background-position: -64px -176px; }
.ui-icon-battery-2 { background-position: -80px -176px; }
.ui-icon-battery-3 { background-position: -96px -176px; }
.ui-icon-circle-plus { background-position: 0 -192px; }
.ui-icon-circle-minus { background-position: -16px -192px; }
.ui-icon-circle-close { background-position: -32px -192px; }
.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-s { background-position: -64px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }
.ui-icon-circle-triangle-n { background-position: -96px -192px; }
.ui-icon-circle-arrow-e { background-position: -112px -192px; }
.ui-icon-circle-arrow-s { background-position: -128px -192px; }
.ui-icon-circle-arrow-w { background-position: -144px -192px; }
.ui-icon-circle-arrow-n { background-position: -160px -192px; }
.ui-icon-circle-zoomin { background-position: -176px -192px; }
.ui-icon-circle-zoomout { background-position: -192px -192px; }
.ui-icon-circle-check { background-position: -208px -192px; }
.ui-icon-circlesmall-plus { background-position: 0 -208px; }
.ui-icon-circlesmall-minus { background-position: -16px -208px; }
.ui-icon-circlesmall-close { background-position: -32px -208px; }
.ui-icon-squaresmall-plus { background-position: -48px -208px; }
.ui-icon-squaresmall-minus { background-position: -64px -208px; }
.ui-icon-squaresmall-close { background-position: -80px -208px; }
.ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
.ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
.ui-icon-grip-solid-vertical { background-position: -32px -224px; }
.ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
.ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
.ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-tl { -moz-border-radius-topleft: 5px; -webkit-border-top-left-radius: 5px; border-top-left-radius: 5px; }
.ui-corner-tr { -moz-border-radius-topright: 5px; -webkit-border-top-right-radius: 5px; border-top-right-radius: 5px; }
.ui-corner-bl { -moz-border-radius-bottomleft: 5px; -webkit-border-bottom-left-radius: 5px; border-bottom-left-radius: 5px; }
.ui-corner-br { -moz-border-radius-bottomright: 5px; -webkit-border-bottom-right-radius: 5px; border-bottom-right-radius: 5px; }
.ui-corner-top { -moz-border-radius-topleft: 5px; -webkit-border-top-left-radius: 5px; border-top-left-radius: 5px; -moz-border-radius-topright: 5px; -webkit-border-top-right-radius: 5px; border-top-right-radius: 5px; }
.ui-corner-bottom { -moz-border-radius-bottomleft: 5px; -webkit-border-bottom-left-radius: 5px; border-bottom-left-radius: 5px; -moz-border-radius-bottomright: 5px; -webkit-border-bottom-right-radius: 5px; border-bottom-right-radius: 5px; }
.ui-corner-right {  -moz-border-radius-topright: 5px; -webkit-border-top-right-radius: 5px; border-top-right-radius: 5px; -moz-border-radius-bottomright: 5px; -webkit-border-bottom-right-radius: 5px; border-bottom-right-radius: 5px; }
.ui-corner-left { -moz-border-radius-topleft: 5px; -webkit-border-top-left-radius: 5px; border-top-left-radius: 5px; -moz-border-radius-bottomleft: 5px; -webkit-border-bottom-left-radius: 5px; border-bottom-left-radius: 5px; }
.ui-corner-all { -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; }

/* Overlays */
.ui-widget-overlay { background: #aaaaaa url(images/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x; opacity: .30;filter:Alpha(Opacity=30); }
.ui-widget-shadow { margin: -8px 0 0 -8px; padding: 8px; background: #aaaaaa url(images/ui-bg_flat_0_aaaaaa_40x100.png) 50% 50% repeat-x; opacity: .30;filter:Alpha(Opacity=30); -moz-border-radius: 8px; -webkit-border-radius: 8px; border-radius: 8px; }/*
 * jQuery UI Dialog @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog#theming
 */
.ui-dialog { position: absolute; padding: .2em; width: 300px; overflow: hidden; }
.ui-dialog .ui-dialog-titlebar { padding: .5em 1em .3em; position: relative;  }
.ui-dialog .ui-dialog-title { float: left; margin: .1em 16px .2em 0; } 
.ui-dialog .ui-dialog-titlebar-close { position: absolute; right: .3em; top: 50%; width: 19px; margin: -10px 0 0 0; padding: 1px; height: 18px; }
.ui-dialog .ui-dialog-titlebar-close span { display: block; margin: 1px; }
.ui-dialog .ui-dialog-titlebar-close:hover, .ui-dialog .ui-dialog-titlebar-close:focus { padding: 0; }
.ui-dialog .ui-dialog-content { position: relative; border: 0; padding: .5em 1em; background: none; overflow: auto; zoom: 1; }
.ui-dialog .ui-dialog-buttonpane { text-align: left; border-width: 1px 0 0 0; background-image: none; margin: .5em 0 0 0; padding: .3em 1em .5em .4em; }
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset { float: right; }
.ui-dialog .ui-dialog-buttonpane button { margin: .5em .4em .5em 0; cursor: pointer; }
.ui-dialog .ui-resizable-se { width: 14px; height: 14px; right: 3px; bottom: 3px; position:absolute; }
.ui-draggable .ui-dialog-titlebar { cursor: move; }



/**
* Required for time picker addon of datepicker (jquery-ui-timepicker-addon.js)
*/
.ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }
.ui-timepicker-div dl { text-align: left; }
.ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }
.ui-timepicker-div dl dd { margin: 0 10px 10px 65px; }
.ui-timepicker-div dl dd a {
    width: 10px;
    height: 10px;
    display: inline-block;
    position: relative;
}
.ui-timepicker-div td { font-size: 90%; }
.ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }

/**
* Stage Order
*/
.stage_order_row{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
}
.stage_order_row:hover{
    background: #B6DDF2;
}
.stage_order_pos{
    width: 20px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    height: 30px;
    border-right: 1px solid black;
    float: left;
}
.stage_order_name{
    padding-left: 5px;
    padding-right: 5px;
    line-height: 30px;
    float: left;
}
.stage_order_arrow{
    /*background-image: url('some/image/url') no-repeat;*/
    display: block;
    width: 30px;
    height: 30px;
    float: right;
    text-align: center;
    border-left: 1px solid black;
    /*temp*/
    /*background: red;*/
    /*border: 1px solid #808080;*/
}
.stage_order_arrow.up{
    /*background-position: top left;*/
}
.stage_order_arrow.down{
    /*background-position: bottom left;*/
}

#save_stage_order{
    margin: 0 auto;
    display: block;
    margin-top: 10px;
}
.stage_order_drag_hover{
    background: lightgrey;
}