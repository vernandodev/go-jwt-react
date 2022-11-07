package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/vernandodev/go-jwt-react/controllers"
)

func Setup(app *fiber.App) {
	app.Get("/hello", controllers.Hello)
}
