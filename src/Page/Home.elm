module Page.Home exposing (Model, Msg, init, toSession, update, view)

import Html exposing (Html)
import Html.Attributes as Attributes
import Session exposing (Session)



-- TYPES


type alias Model =
    { session : Session
    }


toSession : Model -> Session
toSession model =
    model.session


type Msg
    = NoOp



-- STATE


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> { title : String, content : Html msg }
view model =
    { title = "About"
    , content =
        Html.div [ Attributes.class "" ]
            [ Html.text "work"
            ]
    }
