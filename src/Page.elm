module Page exposing (Page(..), view)

import Browser exposing (Document)
import Html exposing (Html)
import Html.Attributes as Attributes
import Route exposing (Route)


type Page
    = Other
    | Home


view : Page -> { title : String, content : Html msg } -> Document msg
view page { title, content } =
    { title = title ++ " - starter"
    , body =
        [ viewHeader page
        , viewContent content
        , viewFooter
        ]
    }


viewHeader : Page -> Html msg
viewHeader page =
    Html.nav [ Attributes.class "" ] []


viewContent : Html msg -> Html msg
viewContent content =
    Html.main_ [ Attributes.class "" ]
        [ content
        ]


viewFooter : Html msg
viewFooter =
    Html.footer [ Attributes.class "" ] []


isActive : Page -> Route -> Bool
isActive page route =
    case ( page, route ) of
        ( Home, Route.Home ) ->
            True

        _ ->
            False
