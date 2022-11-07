package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/vernandodev/go-jwt-react/databases"
	"github.com/vernandodev/go-jwt-react/routes"
)

func main() {
	databases.Connect()
	app := fiber.New()

	routes.Setup(app)

	app.Listen(":8000")
}
