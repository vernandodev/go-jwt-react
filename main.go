package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/vernandodev/go-jwt-react/databases"
	"github.com/vernandodev/go-jwt-react/routes"
)

func main() {
	databases.Connect()
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true, // frontend dapat mengakses cookie
	}))

	routes.Setup(app)

	app.Listen(":8000")
}
