json.partial! "api/parties/party", party: @party

json.guests @party.guests do |guest|
        json.gifts guest.gifts, :title
        json.name guest.name
end