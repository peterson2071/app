//apiKey: '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'
import { Configuration, OpenAIApi } from 'openai';
import express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const configuration = new Configuration({
    organization: "org-ptFBeBInm9XDMlSa4AhOkBnZ",
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors()) ;
const port = 3080;

app.post('/', async (req, res) => {
    const { message } = req.body
    console.log(message, "message");
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5
    });
    res.json({
        message: response.data.choices[0].text,
    })
})

app.listen(port);
console.log(`listening on ${port}`);