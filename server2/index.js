import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { OpenAIApi, Configuration } from 'openai';


const configuration = new Configuration({
    organization: 'org-ptFBeBInm9XDMlSa4AhOkBnZ',
    apiKey: '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 '
})
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 8080;

app.post('/', async (req, res) =>{
    try {
    const {input} = req.body
    const response = await openai.createImage({
        prompt: `${input}`,
        n: 1,
        size: '512x512',
    })
    res.json({
        input: response.data.data[0].url
    })
    console.log(input)
} catch(err) {
    console.info(err.message)
}

})

app.listen(port);
console.log(`listening on port ${port}`);