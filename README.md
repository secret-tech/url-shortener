FORMAT: 1A
HOST: https://localhost:8080/

# url-shortener

Polls is a simple API allowing consumers to view polls and vote in them.


## Links Collection [/]
### Create shortlink [POST /short_link]
+ Request (application/json)


    + Attributes (object)
        + longUrl: string

+ Response 201 (application/json)

    + Body

            {
                "longUrl": "string",
                "shortLink": "string",
            }

### Redirect [GET /short_link/{hash}]
+ Request (application/json)


+ Response 301 (text/html)