module Route exposing (Route(..), fromUrl, href)

import Html exposing (Attribute)
import Html.Attributes as Attributes
import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser)


type Route
    = Home


parser : Parser (Route -> a) a
parser =
    Parser.oneOf
        [ Parser.map Home Parser.top
        ]


href : Route -> Attribute msg
href targetRoute =
    Attributes.href (routeToString targetRoute)


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                Home ->
                    []
    in
    "/" ++ String.join "/" pieces


fromUrl : Url -> Maybe Route
fromUrl url =
    Parser.parse parser url
