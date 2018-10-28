module Main exposing (main)

import Browser exposing (Document)
import Browser.Navigation as Navigation
import Html
import Html.Attributes as Attributes
import Json.Decode exposing (Value)
import Url exposing (Url)


type alias Model =
    { location : Url
    , navKey : Navigation.Key
    }


type Msg
    = ChangedUrl Url
    | ClickedLink Browser.UrlRequest


init : Value -> Url -> Navigation.Key -> ( Model, Cmd Msg )
init flags url navKey =
    ( { location = url, navKey = navKey }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangedUrl url ->
            ( { model | location = url }
            , Cmd.none
            )

        ClickedLink urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model
                    , Cmd.none
                      -- , Navigation.pushUrl (Session.navKey (toSession model)) (Url.toString url)
                    )

                Browser.External href ->
                    ( model
                    , Navigation.load href
                    )


view : Model -> Document Msg
view _ =
    { title = "start"
    , body =
        [ Html.div [ Attributes.class "bg-blue" ]
            [ Html.text "hey" ]
        ]
    }


main : Program Value Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        , onUrlRequest = ClickedLink
        , onUrlChange = ChangedUrl
        }
