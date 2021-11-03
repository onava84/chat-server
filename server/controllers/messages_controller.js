
const messages= []
let id = 0

module.exports = {
   create: (req, res) => {
      const { text, time } = req.body
      const newMessage = {
         id,
         text,
         time
      }
      id++
      messages.push(newMessage)
      res.status(200).send(messages)
   },
   read: (req, res) => {
      res.status(200).send(messages)
   },
   update: (req, res) => {
      const { text, time } = req.body
      const { id } = req.params

      const messageIndex = messages.findIndex(message => message.id === +id)
      messages[messageIndex] = {
         id: +id,
         text,
         time: time || messages[messageIndex].time
      }
      res.status(200).send(messages)
   },
   delete: (req, res) => {
      const {id} = req.params
      const elementIndex = messages.findIndex(message => message.id === +id)
      messages.splice(elementIndex, 1)
      res.status(200).send(messages)
   }
}