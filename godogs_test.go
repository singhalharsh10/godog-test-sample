package godog_test

import "github.com/cucumber/godog"

func iEat(arg1 int) error {
	return nil
}

func thereAreGodogs(arg1 int) error {
	return nil
}

func thereShouldBeRemaining(arg1 int) error {
	return nil
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(`^I eat (\d+)$`, iEat)
	ctx.Step(`^there are (\d+) godogs$`, thereAreGodogs)
	ctx.Step(`^there should be (\d+) remaining$`, thereShouldBeRemaining)
}
