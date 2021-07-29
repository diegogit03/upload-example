import { Request, Response } from 'express';
import { unlink } from 'fs/promises';

import Image from '@models/Image';
import ws    from '@services/ws';

class ImageController {

    public async store (req: Request, res: Response) {
        const { subtitle } = req.body;

        try {

            const image = await Image.create({
                subtitle,
                originalName: req.file?.originalname,
                fileName: req.file?.filename
            });

            ws.emit('newImage', image);

            return res.status(201).json({
                message: 'Imagem adicionada com sucesso!'
            });

        } catch (error) {

            await unlink(req.file?.path ?? '');

            return res.status(400).json({
                message: 'Algo deu errado tente novamente, mais tarde.'
            });

        }
    }

    public async index (req: Request, res: Response) {
        try {

            const images = await Image.find();

            return res.json(images);

        } catch (err) {

            return res.status(500).json({
                message: 'Não foi possivel listar as imagens'
            });

        }
    }

}

export default ImageController;
