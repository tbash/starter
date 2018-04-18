module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (..)


type Model
    = Model


type Msg
    = Msg


view : Model -> Html Msg
view _ =
    div [ class "bg-blue" ]
        [ text "hey" ]


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = ( Model, Cmd.none )
        , subscriptions = \_ -> Sub.none
        , update = \_ m -> ( m, Cmd.none )
        }
