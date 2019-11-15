module Ui.Icon exposing (Attribute, Icon, class, classList, logout, view)

import Html exposing (Html)
import Html.Attributes
import Svg exposing (Svg)
import Svg.Attributes as Attributes



-- ATTRIBUTES


type Attribute msg
    = Attribute (Svg.Attribute msg)


unattr : Attribute msg -> Svg.Attribute msg
unattr (Attribute attr) =
    attr


class : String -> Attribute msg
class =
    Attribute << Attributes.class


classList : List ( String, Bool ) -> Attribute msg
classList classes =
    List.filter Tuple.second classes
        |> List.map Tuple.first
        |> String.join " "
        |> class



-- ICONS


type Icon
    = Icon (List (Svg Never))


logout : Icon
logout =
    Icon
        [ Svg.path
            [ Attributes.d "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
            ]
            []
        ]



-- TRANSFORMATION


view : List (Attribute msg) -> Icon -> Html msg
view attrs (Icon inner) =
    Svg.svg
        (List.concat
            [ List.map unattr attrs
            , [ Attributes.viewBox "0 0 24 24"
              , Attributes.fill "none"
              , Attributes.stroke "currentColor"
              , Attributes.strokeWidth "2"
              , Attributes.strokeLinecap "round"
              , Attributes.strokeLinejoin "round"
              ]
            ]
        )
        (List.map (Html.map never) inner)
