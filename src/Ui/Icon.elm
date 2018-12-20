module Ui.Icon exposing (Icon(..), sprite, view)

import Html exposing (Attribute, Html)
import Html.Attributes as Attributes
import Json.Encode as Encode


type Icon
    = Close
    | Menu


view : Icon -> Html msg
view icon =
    Html.node "ui-icon-view"
        [ Attributes.class "block w-full h-full"
        , iconName icon
        ]
        []


iconName : Icon -> Attribute msg
iconName =
    Attributes.property "iconName" << Encode.string << toString


toString : Icon -> String
toString i =
    case i of
        Close ->
            "close"

        Menu ->
            "menu"


sprite : Html msg
sprite =
    Html.node "ui-icon-sprite" [] []
