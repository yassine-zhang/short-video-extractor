import { Elysia } from "elysia";

import { parseVideo } from "@/controllers/public/parseVideo";
import { transferPlatform } from "@/controllers/platform-transfer";
import { publicModels } from "@/models/public.model";

const plugin = new Elysia({ prefix: "/public" })
	.use(publicModels)
	// .post("/parseVideo", parseVideo, { body: "parseVideo" })
	.post("/parseVideo", transferPlatform, { body: "parseVideo" });

export default plugin;
