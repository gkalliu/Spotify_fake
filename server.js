app.post("/playlist/add", express.json(), (req, res) => {

    const { playlist_id, music_id } = req.body;

    const sql = `
        INSERT INTO playlist_musics (playlist_id, music_id)
        VALUES (?,?)
    `;

    db.query(sql, [playlist_id, music_id], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Música adicionada!" });

    });

});