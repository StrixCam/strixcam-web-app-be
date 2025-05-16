import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OverlayModule } from './overlays/overlays.module';
import { MatchModule } from './matches/matches.module';
import { TeamsModule } from './teams/teams.module';
import { SportsModule } from './sports/sports.module';

@Module({
  imports: [OverlayModule, MatchModule, TeamsModule, SportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
