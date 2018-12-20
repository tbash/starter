module Page.NotFound exposing (view)

import Html exposing (Html)
import Html.Attributes as Attributes



-- VIEW


view : { title : String, content : Html msg }
view =
    { title = "Not Found"
    , content =
        Html.div [ Attributes.class "" ]
            [ Html.span [] [ Html.text "Not Found" ]
            ]
    }
