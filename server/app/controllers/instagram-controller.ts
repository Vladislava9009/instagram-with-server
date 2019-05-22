import { Request, Response } from "express";
import { config } from "../config/config";
import request from "request";

let token = "";

class InstagramController {
  login(req: Request, res: Response) {
    res.json(config.auth_url);
  }
  getToken(req: Request, res: Response) {
    const options = {
      url: "https://api.instagram.com/oauth/access_token",
      method: "POST",
      form: {
        client_id: config.client_id,
        client_secret: config.client_secret,
        grant_type: "authorization_code",
        redirect_uri: config.redirect_uri,
        code: req.body.code
      }
    };
    request(options, (error: any, response: any, body: any) => {
      if (!error && response.statusCode == 200) {
        const access_token = JSON.parse(body).access_token;
        token = access_token;
        res.json({ token });
      }
    });
  }

  getPosts(req: Request, res: Response) {
    request(
      {
        url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`,
        method: "GET"
      },
      function(error: any, response: any, body: any) {
        if (!error && response.statusCode == 200) {
          const photos = JSON.parse(body).data;
          res.json({ photos });
        }
      }
    );
  }
}

export const Instagram = new InstagramController();
