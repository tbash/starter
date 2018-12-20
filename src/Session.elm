module Session exposing (Session, fromViewer, navKey)

import Browser.Navigation as Navigation



-- TYPES


type Session
    = Guest Navigation.Key



-- INFO


navKey : Session -> Navigation.Key
navKey session =
    case session of
        Guest key ->
            key



-- CHANGES


fromViewer : Navigation.Key -> Session
fromViewer key =
    Guest key
